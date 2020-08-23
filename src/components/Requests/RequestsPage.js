import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon, Header } from 'react-native-elements';
import OpenItemList from '../Lists/OpenItemList';
import OwnItemList from '../Lists/OwnItemList';
import StyledHeader from '../Utils/StyledHeader';
import ToggleButtonRow from '../Utils/ToggleButtonRow';
import { saveRequest, deleteRequest, getLocalRequests } from '../../server/requests';
import { getUserRequests } from '../../server/users';
import { modalType } from '../../utils/appConstants';

export default function RequestsPage(props) {
    const [manageOwnRequests, setManageOwnRequests] = useState(false)

    return (
        <View>
            <Header
                placement="left"
                centerComponent={
                    <StyledHeader text={'Requests'} />
                }
                backgroundColor={'#FF7F50'}
                rightComponent={
                    <TouchableOpacity onPress={() => props.navigation.navigate('AddItemModal', {
                        saveItem: saveRequest,
                        type: modalType.request
                    })}>
                        <Icon color={'white'} size={20} name={'plus'} type='font-awesome' />
                    </TouchableOpacity>
                }
                style={{ marginBottom: 0 }} />
            <ToggleButtonRow
                manageOwnItems={manageOwnRequests}
                toggleManageOwnItems={() => setManageOwnRequests(!manageOwnRequests)}
                type={modalType.request} />
            {manageOwnRequests ?
                <OwnItemList
                    navigation={props.navigation}
                    deleteItem={deleteRequest}
                    getUserItems={getUserRequests} /> :
                <OpenItemList 
                    navigation={props.navigation}
                    getLocalItems={getLocalRequests} />}
        </View >
    );
}
