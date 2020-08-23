import * as queries from "../graphql/queries";
import * as mutations from '../graphql/mutations';
import { nanoid } from 'nanoid/async/index.native'
import { API, Auth, graphqlOperation } from "aws-amplify";
import R from 'ramda';

export const getLocalRequests = async (location, m) => {
    const locationInput = {
        lat: location.latitude,
        lon: location.longitude
    }

    const response = await API.graphql(
        graphqlOperation(queries.searchRequestsByDistance, {
            location: locationInput,
            m: 2000
        })
    )

    const getRequestsFromResponse = R.pathOr([], ['data', 'searchRequestsByDistance', 'items'])
    return getRequestsFromResponse(response)
}

export const saveRequest = async (title, time, description, location) => {
    const user = await Auth.currentUserInfo();
    const { attributes } = user;
    const { username, sub } = attributes;

    const coordinates = {
        lat: location.latitude,
        lon: location.longitude
    }

    const uuid = await nanoid();

    const input = {
        id: uuid,
        requestUserId: sub,
        userName: username,
        title: title,
        time: time,
        description: description,
        coordinates: coordinates
    }

    const response = await API.graphql(
        graphqlOperation(mutations.createRequest, {
            input: input
        })
    )

    return response.data.createRequest;
}

export const deleteRequest = async (requestId) => {
    const input = {
        id: requestId
    }

    const response = await API.graphql(
        graphqlOperation(mutations.deleteRequest, {
            input: input
        })
    )

    return response.data.deleteRequest;
}