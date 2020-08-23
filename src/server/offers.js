import * as queries from "../graphql/queries";
import * as mutations from '../graphql/mutations';
import { nanoid } from 'nanoid/async/index.native';
import { API, Auth, graphqlOperation } from "aws-amplify";
import R from 'ramda';

export const getLocalOffers = async (location, m) => {
    const locationInput = {
        lat: location.latitude,
        lon: location.longitude
    }

    const response = await API.graphql(
        graphqlOperation(queries.searchOffersByDistance, {
            location: locationInput,
            m: 2000
        })
    )
    const getOffersFromResponse = R.pathOr([], ['data', 'searchOffersByDistance', 'items'])
    return getOffersFromResponse(response)
}

export const saveOffer = async (title, time, description, location) => {
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
        offerUserId: sub,
        userName: username,
        title: title,
        time: time,
        description: description,
        coordinates: coordinates
    }

    const response = await API.graphql(
        graphqlOperation(mutations.createOffer, {
            input: input
        })
    )

    return response.data.createOffer;
}

export const deleteOffer = async (offerId) => {
    const input = {
        id: offerId
    }

    const response = await API.graphql(
        graphqlOperation(mutations.deleteOffer, {
            input: input
        })
    )

    return response.data.deleteOffer;
}