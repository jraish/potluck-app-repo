import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { ListItem } from 'react-native-elements';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default function OpenItemList(props) {
    const { navigation, getLocalItems } = props;
    const [itemList, setItemList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchItems = async (isMounted) => {
        const userLocation = await asyncGetLocation()
        const itemData = await getLocalItems(userLocation, 100);

        if (isMounted) {
            setItemList(itemData)
        }
    }

    useEffect(() => {
        let isMounted = true;
        fetchItems(isMounted)

        return () => isMounted = false;
    }, [])

    const asyncGetLocation = async () => {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            setErrorMessage('Permission to access location was denied');
        };

        const region = await Location.getCurrentPositionAsync({});

        return region.coords
    };

    const keyExtractor = (item, index) => index.toString()

    const truncateText = (str) => {
        return str.length > 30 ? str.substring(0, 30) + "..." : str;
    }

    const renderItem = ({ item }) => {
        const {
            title = '',
            id = '',
            time = '',
            description = '' } = item;

        return (
            <ListItem
                title={title}
                key={id + title}
                rightTitle={time}
                subtitle={truncateText(description)}
                onPress={() => navigation.navigate('ExistingItemModal', {
                    item: item
                })}
                bottomDivider
                style={{
                    marginVertical: 5,
                    shadowColor: '#fff',
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    elevation: 5,
                    backgroundColor: "#fff",
                }}
            />
        )
    }

    return (
        <SafeAreaView>
            {itemList ?
                <FlatList
                    keyExtractor={keyExtractor}
                    data={itemList}
                    renderItem={renderItem}
                /> : null}
        </SafeAreaView>
    )
}
