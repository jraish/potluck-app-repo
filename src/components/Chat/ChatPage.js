import React, { useState } from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import StyledHeader from '../Utils/StyledHeader';
import ChatList from './ChatList';

export default function ChatPage(props) {
    const { navigation } = props;
    
    return <View>
        <Header
            placement="left"
            centerComponent={
                <StyledHeader text={'Messages'} />
            }
            backgroundColor={'#FF7F50'}
            style={{ marginBottom: 0 }} />
        <ChatList navigation={navigation} />
    </View >
}
