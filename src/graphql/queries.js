/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const nearbyRequest = /* GraphQL */ `
  query NearbyRequest($location: LocationRequestInput!) {
    nearbyRequest(location: $location) {
      items {
        id
        user {
          id
          userName
        }
        userName
        title
        time
        description
        coordinates {
          lat
          lon
        }
      }
      total
      nextToken
    }
  }
`;
export const searchRequestsByDistance = /* GraphQL */ `
  query SearchRequestsByDistance($location: LocationRequestInput!, $m: Int) {
    searchRequestsByDistance(location: $location, m: $m) {
      items {
        id
        user {
          id
          userName
        }
        userName
        title
        time
        description
        coordinates {
          lat
          lon
        }
      }
      total
      nextToken
    }
  }
`;
export const nearbyOffer = /* GraphQL */ `
  query NearbyOffer($location: LocationRequestInput!) {
    nearbyOffer(location: $location) {
      items {
        id
        user {
          id
          userName
        }
        userName
        title
        time
        description
        coordinates {
          lat
          lon
        }
      }
      total
      nextToken
    }
  }
`;
export const searchOffersByDistance = /* GraphQL */ `
  query SearchOffersByDistance($location: LocationOfferInput!, $m: Int) {
    searchOffersByDistance(location: $location, m: $m) {
      items {
        id
        user {
          id
          userName
        }
        userName
        title
        time
        description
        coordinates {
          lat
          lon
        }
      }
      total
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      userName
      requests {
        items {
          id
          userName
          title
          time
          description
        }
        nextToken
      }
      offers {
        items {
          id
          userName
          title
          time
          description
        }
        nextToken
      }
      rooms {
        items {
          id
          userId
          roomId
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userName
        requests {
          nextToken
        }
        offers {
          nextToken
        }
        rooms {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getRequest = /* GraphQL */ `
  query GetRequest($id: ID!) {
    getRequest(id: $id) {
      id
      user {
        id
        userName
        requests {
          nextToken
        }
        offers {
          nextToken
        }
        rooms {
          nextToken
        }
      }
      userName
      title
      time
      description
      coordinates {
        lat
        lon
      }
    }
  }
`;
export const listRequests = /* GraphQL */ `
  query ListRequests(
    $filter: ModelRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          userName
        }
        userName
        title
        time
        description
        coordinates {
          lat
          lon
        }
      }
      nextToken
    }
  }
`;
export const getOffer = /* GraphQL */ `
  query GetOffer($id: ID!) {
    getOffer(id: $id) {
      id
      user {
        id
        userName
        requests {
          nextToken
        }
        offers {
          nextToken
        }
        rooms {
          nextToken
        }
      }
      userName
      title
      time
      description
      coordinates {
        lat
        lon
      }
    }
  }
`;
export const listOffers = /* GraphQL */ `
  query ListOffers(
    $filter: ModelOfferFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOffers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          userName
        }
        userName
        title
        time
        description
        coordinates {
          lat
          lon
        }
      }
      nextToken
    }
  }
`;
export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
      id
      messages {
        items {
          id
          userId
          userName
          content
          when
          roomId
        }
        nextToken
      }
      createdAt
      lastMessage
      lastMessageAt
      users {
        items {
          id
          userId
          roomId
        }
        nextToken
      }
    }
  }
`;
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        messages {
          nextToken
        }
        createdAt
        lastMessage
        lastMessageAt
        users {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      userId
      userName
      content
      when
      roomId
      room {
        id
        messages {
          nextToken
        }
        createdAt
        lastMessage
        lastMessageAt
        users {
          nextToken
        }
      }
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        userName
        content
        when
        roomId
        room {
          id
          createdAt
          lastMessage
          lastMessageAt
        }
      }
      nextToken
    }
  }
`;
export const searchRequests = /* GraphQL */ `
  query SearchRequests(
    $filter: SearchableRequestFilterInput
    $sort: SearchableRequestSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchRequests(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user {
          id
          userName
        }
        userName
        title
        time
        description
        coordinates {
          lat
          lon
        }
      }
      nextToken
      total
    }
  }
`;
export const searchOffers = /* GraphQL */ `
  query SearchOffers(
    $filter: SearchableOfferFilterInput
    $sort: SearchableOfferSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchOffers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user {
          id
          userName
        }
        userName
        title
        time
        description
        coordinates {
          lat
          lon
        }
      }
      nextToken
      total
    }
  }
`;
