import API, { graphqlOperation } from '@aws-amplify/api';
import { Auth } from 'aws-amplify';
import { getUser } from '../graphql/queries';
import { createUser } from '../graphql/mutations';
import R from 'ramda';

export const addUserToDB = async (userId, username) => {
    const user = {
        id: userId,
        userName: username
    };
    const response = await API.graphql(graphqlOperation(createUser, { input: user }))

    return response.data.createUser
};

export const getUserById = async () => {
    const user = await Auth.currentUserInfo();
    const { attributes } = user;
    const { sub } = attributes;
    const response = await API.graphql(graphqlOperation(getUser, { id: sub }))

    return response.data.getUser
}

export const getUserOffers = async () => {
    const user = await getUserById();
    const getOffersFromUser = R.pathOr([], ['offers', 'items'])
    return getOffersFromUser(user)
}

export const getUserRequests = async () => {
    const user = await getUserById();
    const getRequestsFromUser = R.pathOr([], ['requests', 'items'])
    return getRequestsFromUser(user)
}