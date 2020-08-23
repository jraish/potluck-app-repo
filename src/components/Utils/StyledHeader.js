import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

export default function StyledHeader(props) {
    const { text } = props;
    return (
        <View
            style={{
                backgroundColor: '#FF7F50',
                flex: 1
            }}>
            <Text
                h3
                style={{
                    color: 'white'
                }}>
                {text}
            </Text>
        </View>
    );
}
