/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createRequest = /* GraphQL */ `
  mutation CreateRequest(
    $input: CreateRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    createRequest(input: $input, condition: $condition) {
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
export const updateRequest = /* GraphQL */ `
  mutation UpdateRequest(
    $input: UpdateRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    updateRequest(input: $input, condition: $condition) {
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
export const deleteRequest = /* GraphQL */ `
  mutation DeleteRequest(
    $input: DeleteRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    deleteRequest(input: $input, condition: $condition) {
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
export const createOffer = /* GraphQL */ `
  mutation CreateOffer(
    $input: CreateOfferInput!
    $condition: ModelOfferConditionInput
  ) {
    createOffer(input: $input, condition: $condition) {
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
export const updateOffer = /* GraphQL */ `
  mutation UpdateOffer(
    $input: UpdateOfferInput!
    $condition: ModelOfferConditionInput
  ) {
    updateOffer(input: $input, condition: $condition) {
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
export const deleteOffer = /* GraphQL */ `
  mutation DeleteOffer(
    $input: DeleteOfferInput!
    $condition: ModelOfferConditionInput
  ) {
    deleteOffer(input: $input, condition: $condition) {
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
export const createUserRoom = /* GraphQL */ `
  mutation CreateUserRoom(
    $input: CreateUserRoomInput!
    $condition: ModelUserRoomConditionInput
  ) {
    createUserRoom(input: $input, condition: $condition) {
      id
      userId
      roomId
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
export const updateUserRoom = /* GraphQL */ `
  mutation UpdateUserRoom(
    $input: UpdateUserRoomInput!
    $condition: ModelUserRoomConditionInput
  ) {
    updateUserRoom(input: $input, condition: $condition) {
      id
      userId
      roomId
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
export const deleteUserRoom = /* GraphQL */ `
  mutation DeleteUserRoom(
    $input: DeleteUserRoomInput!
    $condition: ModelUserRoomConditionInput
  ) {
    deleteUserRoom(input: $input, condition: $condition) {
      id
      userId
      roomId
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
export const createRoom = /* GraphQL */ `
  mutation CreateRoom(
    $input: CreateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    createRoom(input: $input, condition: $condition) {
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
export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom(
    $input: UpdateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    updateRoom(input: $input, condition: $condition) {
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
export const deleteRoom = /* GraphQL */ `
  mutation DeleteRoom(
    $input: DeleteRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    deleteRoom(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
