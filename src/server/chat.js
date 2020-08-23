import * as queries from "../graphql/queries";
import * as mutations from '../graphql/mutations';
import { nanoid } from 'nanoid/async/index.native';
import { API, Auth, graphqlOperation } from "aws-amplify";
import R from 'ramda';
import gql from 'graphql-tag';

export const getUserConversations = async () => {
    const user = await Auth.currentUserInfo();
    const { attributes, username } = user;
    const { sub } = attributes;
    
    const query = gql`
        query GetUser($id: ID!) {
            getUser(id: $id) {
                rooms {
                    items {
                        room {
                            id
                            lastMessage
                            lastMessageAt
                            users {
                                items {
                                    user {
                                        id
                                        userName
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }`;

    const response = await API.graphql(
        graphqlOperation(query, {
            id: sub
        })
    )

    const getRoomsFromResponse = R.pathOr([], ['data', 'getUser', 'rooms', 'items'])
    const rooms = getRoomsFromResponse(response)
    const getUsersFromRoom = R.pathOr([], ['room', 'users', 'items'])
    
    return {
        userName: username,
        userId: sub,
        userRooms: rooms.map(room => {
            return {
                id: room.room.id,
                lastMessage: room.room.lastMessage,
                lastMessageAt: room.room.lastMessageAt,
                users: getUsersFromRoom(room).map(user => {
                    return {
                        id: user.user.id,
                        userName: user.user.userName
                    }
                })
            }
        })
    }
}

export const openChatWithUser = async (otherUserId) => {
    const { userName, userId, userRooms } = await getUserConversations();
    const roomWithUser = userRooms.filter(room => room.users.some(user => {
        return user.id == otherUserId
    }))

    if (roomWithUser.length == 0) {
        const roomId = await nanoid();
        const roomInput = {
            id: roomId,
            createdAt: new Date(),
            lastMessageAt: new Date()
        }
        const response = await API.graphql(graphqlOperation(mutations.createRoom, { input: roomInput }))

        await createUserRoom(roomId, userId)
        await createUserRoom(roomId, otherUserId)

        const getRoomsFromResponse = R.pathOr([], ['data', 'createRoom', 'id'])

        return getRoomsFromResponse(response)
    } else {
        return roomWithUser[0].id
    }
}

const createUserRoom = async (roomId, userId) => {
    const roomUserId = await nanoid();

    const connectUsersToRoomInput = {
        id: roomUserId,
        userId: userId,
        roomId: roomId
    }

    await API.graphql(graphqlOperation(mutations.createUserRoom, { input: connectUsersToRoomInput }))
}

export const sendMessage = async (text, userId, userName, roomId) => {
    const uuid = await nanoid();
    const now = new Date()
    const messageInput = {
        id: uuid,
        userId: userId,
        userName: userName,
        content: text,
        when: now,
        roomId: roomId
    }
    await API.graphql(graphqlOperation(mutations.createMessage, {
        input: messageInput
    }))

    const updateRoomInput = {
        id: roomId,
        lastMessage: text,
        lastMessageAt: now

    }
    await API.graphql(graphqlOperation(mutations.updateRoom, {
        input: updateRoomInput
    }))
}

export const getRoomHistory = async (roomId) => {
    const roomInput = {
        id: roomId
    }

    const response = await API.graphql(graphqlOperation(queries.getRoom, roomInput))
    const getMessagesFromResponse = R.pathOr([], ['data', 'getRoom', 'messages', 'items'])

    return getMessagesFromResponse(response)
}