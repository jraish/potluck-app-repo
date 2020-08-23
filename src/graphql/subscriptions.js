/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRoomMessage = /* GraphQL */ `
  subscription OnCreateRoomMessage($roomId: ID!) {
    onCreateRoomMessage(roomId: $roomId) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateRequest = /* GraphQL */ `
  subscription OnCreateRequest {
    onCreateRequest {
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
export const onUpdateRequest = /* GraphQL */ `
  subscription OnUpdateRequest {
    onUpdateRequest {
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
export const onDeleteRequest = /* GraphQL */ `
  subscription OnDeleteRequest {
    onDeleteRequest {
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
export const onCreateOffer = /* GraphQL */ `
  subscription OnCreateOffer {
    onCreateOffer {
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
export const onUpdateOffer = /* GraphQL */ `
  subscription OnUpdateOffer {
    onUpdateOffer {
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
export const onDeleteOffer = /* GraphQL */ `
  subscription OnDeleteOffer {
    onDeleteOffer {
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
export const onCreateUserRoom = /* GraphQL */ `
  subscription OnCreateUserRoom {
    onCreateUserRoom {
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
export const onUpdateUserRoom = /* GraphQL */ `
  subscription OnUpdateUserRoom {
    onUpdateUserRoom {
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
export const onDeleteUserRoom = /* GraphQL */ `
  subscription OnDeleteUserRoom {
    onDeleteUserRoom {
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
export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom {
    onCreateRoom {
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
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom {
    onUpdateRoom {
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
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom {
    onDeleteRoom {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
