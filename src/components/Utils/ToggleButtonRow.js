import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

export default function ToggleButtonRow(props) {
    const { manageOwnItems, toggleManageOwnItems, type } = props;

    return (
        <View style={{
            backgroundColor: '#FF7F50',
            padding: 0,
            marginTop: -1,
            flexDirection: 'row',
            justifyContent: 'space-around'
        }}>
            <TouchableOpacity
                onPress={toggleManageOwnItems}
                style={{
                    marginTop: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    padding: 10,
                    backgroundColor: '#FF7F50',
                    borderBottomColor: manageOwnItems ? null : 'white',
                    borderBottomWidth: manageOwnItems ? 0 : 3,
                    borderRadius: 10
                }}
            >
                <Text
                    style={{
                        color: 'white',
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}>{`Open ${type}s`}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={toggleManageOwnItems}
                style={{
                    marginTop: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    padding: 10,
                    backgroundColor: '#FF7F50',
                    borderBottomColor: manageOwnItems ? 'white' : null,
                    borderBottomWidth: manageOwnItems ? 3 : 0,
                    borderRadius: 10
                }}
            >
                <Text
                    style={{
                        color: 'white',
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}>{`Your ${type}s`}</Text>
            </TouchableOpacity>
        </View>
    );
}
