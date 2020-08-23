import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { openChatWithUser } from '../../server/chat';

export default function ExistingItemModal(props) {
    const { navigation } = props;
    const { item } = navigation.state.params;
    const { title, description, user } = item;

    const truncateTitleText = (str) => {
        return str.length > 20 ? str.substring(0, 20) + "..." : str;
    }

    const openChat = async () => {
        const chatId = await openChatWithUser(user.id);

        navigation.navigate('ChatModal', {
            chatId: chatId
        })
    }

    return (
        <View style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 15,
            height: '100%'
        }}>
            <View style={{
                flex: 1,
                paddingHorizontal: 10,
                marginBottom: 25
            }}>
                <Text h4 style={{
                    height: '15%',
                    overflow: 'hidden'
                }}>{title.toUpperCase()}</Text>
                <Text style={{
                    marginTop: 20,
                    marginBottom: 10,
                    height: '65%',
                    overflow: 'scroll'
                }}>{description}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10, marginBottom: 10 }}>
                <Button
                    buttonStyle={{
                        borderRadius: 5,
                        marginLeft: 10,
                        marginRight: 10,
                        marginBottom: 0,
                        paddingHorizontal: 20,
                        backgroundColor: '#FF7F50'
                    }}
                    title='Back'
                    onPress={() => navigation.goBack()} />
                <Button
                    buttonStyle={{
                        borderRadius: 5,
                        marginLeft: 10,
                        marginRight: 10,
                        marginBottom: 0,
                        paddingHorizontal: 20,
                        backgroundColor: '#FF7F50'
                    }}
                    title={`Contact`}
                    onPress={openChat} />
            </View>
        </View>
    );
}
