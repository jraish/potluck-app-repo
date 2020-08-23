import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default function AddItemModal(props) {
    const { navigation } = props;
    const { saveItem, type } = navigation.state.params;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [inputHeight, setInputHeight] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const asyncGetLocation = async () => {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            setErrorMessage('Permission to access location was denied');
        };

        const region = await Location.getCurrentPositionAsync({});

        return region.coords
    };

    const sendSaveItem = async () => {
        const location = await asyncGetLocation();
        const today = new Date()
        const time = today.getHours() + ":" + (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();

        const result = await saveItem(
            title,
            time,
            description,
            location
        )

        navigation.goBack()
    }

    return (
        <View style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 25,
            height: '100%'
        }}>
            <View style={{
                flex: 1,
                paddingHorizontal: 10,
                marginBottom: 25}}>
                <Text h2>{`Add ${type}`}</Text>
            </View>
            <Input
                placeholder="Title"
                onChangeText={value => setTitle(value)}
                inputStyle={{
                    overflow: 'hidden'
                }}
                containerStyle={{
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    flex: 1,
                    marginVertical: 15
                }}
            />

            <Input
                placeholder="Description"
                onChangeText={value => setDescription(value)}
                onContentSizeChange={(event) => setInputHeight(event.nativeEvent.contentSize.height)}
                multiline={true}
                inputStyle={{
                    paddingLeft: 10,
                    overflow: 'scroll'
                }}
                containerStyle={{
                    flex: 4,
                    height: Math.max(35, inputHeight),
                    marginVertical: 15
                }}
            />
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
                    title={`Save`}
                    onPress={sendSaveItem} />
            </View>
        </View>
    );
}
