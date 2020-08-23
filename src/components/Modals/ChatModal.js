import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { GiftedChat } from 'react-native-gifted-chat';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { onCreateRoomMessage } from '../../graphql/subscriptions';
import { sendMessage, getRoomHistory } from '../../server/chat';

export default function ChatModal(props) {
    const { navigation } = props;

    const { chatId, userId } = navigation.state.params;

    const [messages, setMessages] = useState([]);

    const fetchMessages = async (isMounted) => {
        const savedMessages = await getRoomHistory(chatId)
        if (isMounted) {
            setMessages(savedMessages
                .map(message => getMessage(message))
                .sort((a, b) => b.createdAt - a.createdAt))
        }
    }

    useEffect(() => {
        let isMounted = true;
        fetchMessages(isMounted)

        return () => isMounted = false;
    }, [])

    useEffect(() => {
        const subscription = API.graphql(
            graphqlOperation(onCreateRoomMessage, {
                roomId: chatId
            })
        ).subscribe({
            next: data => {
                const { value: { data: { onCreateRoomMessage } } } = data
                setMessages(GiftedChat.append(messages, getMessage(onCreateRoomMessage)))
            }
        })

        return () => subscription.unsubscribe()
    }, [messages])

    const onSend = async (messages = []) => {
        const user = await Auth.currentUserInfo();
        const { attributes, username } = user;
        const { sub } = attributes;
        messages.forEach((message) => {
            sendMessage(message.text, sub, username, chatId)
        })
    }

    const getMessage = (msg) => {
        const data = {
            _id: msg.id,
            text: msg.content,
            createdAt: new Date(msg.when),
            user: {
                _id: msg.userId,
                name: msg.userName
            }
        }

        return data
    }

    return (
        <View style={{
            flex: 1
        }}>
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: 15
            }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Main')}
                    style={{
                        padding: 20
                    }}>
                    <Icon color={'grey'} size={20} name={'angle-double-left'} type='font-awesome' />
                </TouchableOpacity>
            </View>
            <GiftedChat
                messages={messages}
                onSend={(message) => onSend(message)}
                user={{
                    _id: userId,
                }}
            />
        </View>
    );
}