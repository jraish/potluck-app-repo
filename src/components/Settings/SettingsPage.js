import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Header } from 'react-native-elements';
import { Auth } from 'aws-amplify';

export default function SettingsPage(props) {
    const logOut = () => {
        Auth.signOut()
        navigation.navigate('Auth')
    }

    const { navigation } = props;

    return (
        <View>
            <Header
                placement="left"
                centerComponent={{ text: 'SETTINGS', style: { color: '#fff', fontWeight: 'bold', fontSize: 20 } }}
                backgroundColor={'#FF7F50'}
            />
            <Button
                buttonStyle={{ borderRadius: 5, margin: 10 }}
                title='Log out'
                onPress={logOut} />
        </View >
    );
}
