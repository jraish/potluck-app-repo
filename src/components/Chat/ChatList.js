import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { getUserConversations } from '../../server/chat';

export default function ChatList(props) {
    const { navigation } = props;
    const [conversations, setConversations] = useState([])
    const [user, setUser] = useState(null)
    const [currentUserName, setCurrentUserName] = useState(null)

    const fetchConversations = async (isMounted) => {
        const { userName, userId, userRooms } = await getUserConversations()
        
        if (isMounted) {
            setCurrentUserName(userName)
            setUser(userId)
            setConversations(userRooms || [])
        }
    }

    useEffect(() => {
        let isMounted = true;
        fetchConversations(isMounted)

        return () => isMounted = false;
    }, [])

    const keyExtractor = (item, index) => index.toString()

    const truncateText = (str) => {
        return str.length > 30 ? str.substring(0, 30) + "..." : str;
    }

    const renderItem = ({ item }) => {
        const {
            id,
            lastMessage,
            lastMessageAt,
            users } = item;
        const userNames = users.map(user => user.userName).filter(name => name !== currentUserName) || []
        const localDate = new Date(lastMessageAt)

        return (
            <ListItem
                title={userNames.join(', ')}
                key={id}
                rightTitle={localDate.toLocaleString() || ''}
                subtitle={truncateText(lastMessage || '')}
                onPress={() => navigation.navigate('ChatModal', {
                    chatId: id,
                    userId: user
                })}
                bottomDivider
                style={{
                    marginVertical: 5,
                    shadowColor: '#fff',
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    elevation: 5,
                    backgroundColor: "#fff",
                }}
            />
        )
    }

    return (
        <SafeAreaView>
            {conversations ?
                <FlatList
                    keyExtractor={keyExtractor}
                    data={conversations}
                    renderItem={renderItem}
                /> : null}
        </SafeAreaView>
    )
};