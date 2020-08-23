import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { ListItem } from 'react-native-elements';

export default function OwnItemList(props) {
    const { deleteItem, getUserItems, navigation } = props;
    const [itemList, setItemList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchItems = async (isMounted) => {
        const userItems = await getUserItems()

        if (isMounted) {
            setItemList(userItems || [])
        }
    }

    useEffect(() => {
        let isMounted = true;
        fetchItems(isMounted)

        return () => isMounted = false;
    }, [])

    const truncateText = (str) => {
        return str.length > 30 ? str.substring(0, 30) + "..." : str;
    }

    const keyExtractor = (item, index) => index.toString()

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
                onPress={() => navigation.navigate('EditOwnItemModal', {
                    item: item,
                    deleteItem: deleteItem
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
