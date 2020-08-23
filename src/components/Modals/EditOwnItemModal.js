import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { openChatWithUser } from '../../server/chat';

export default function EditOwnItemModal(props) {
    const { navigation } = props;
    const { item, deleteItem } = navigation.state.params;
    const { title, description, user } = item;

    const truncateTitleText = (str) => {
        return str.length > 20 ? str.substring(0, 20) + "..." : str;
    }

    const deleteOwnItem = async () => {
        const { id } = item;
        const response = await deleteItem(id);
        
        navigation.goBack();
    }

    return (
        <View style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 15,
            height: '100%'
        }}>
            <View style={{
                flex: 1,
                paddingHorizontal: 10,
                marginBottom: 25
            }}>
                <Text h4 style={{
                    height: '15%',
                    overflow: 'hidden'
                }}>{title.toUpperCase()}</Text>
                <Text style={{
                    marginTop: 20,
                    marginBottom: 10,
                    height: '65%',
                    overflow: 'scroll'
                }}>{description}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10, marginBottom: 10 }}>
                <Button
                    buttonStyle={{
                        borderRadius: 5,
                        marginLeft: 10,
                        marginRight: 10,
                        marginBottom: 0,
                        paddingHorizontal: 20,
                        backgroundColor: '#FF7F50'
                    }}
                    title='Back'
                    onPress={() => navigation.goBack()} />
                <Button
                    buttonStyle={{
                        borderRadius: 5,
                        marginLeft: 10,
                        marginRight: 10,
                        marginBottom: 0,
                        paddingHorizontal: 20,
                        backgroundColor: '#FF7F50'
                    }}
                    title={`Delete?`}
                    onPress={deleteOwnItem} />
            </View>
        </View>
    );
}
