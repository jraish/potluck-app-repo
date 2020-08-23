import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon, Header } from 'react-native-elements';
import OpenItemList from '../Lists/OpenItemList';
import OwnItemList from '../Lists/OwnItemList';
import StyledHeader from '../Utils/StyledHeader';
import ToggleButtonRow from '../Utils/ToggleButtonRow';
import { saveOffer, deleteOffer, getLocalOffers } from '../../server/offers';
import { getUserOffers } from '../../server/users';
import { modalType } from '../../utils/appConstants';

export default function ExistingOffersPage(props) {
    const [manageOwnOffers, setManageOwnOffers] = useState(false)

    return (
        <View>
            <Header
                placement="left"
                centerComponent={
                    <StyledHeader text={'Offers'} />
                }
                backgroundColor={'#FF7F50'}
                rightComponent={
                    <TouchableOpacity onPress={() => props.navigation.navigate('AddItemModal', {
                        saveItem: saveOffer,
                        type: modalType.offer
                    })}>
                        <Icon color={'white'} size={20} name={'plus'} type='font-awesome' />
                    </TouchableOpacity>
                }
                style={{ marginBottom: 0 }} />
            <ToggleButtonRow
                manageOwnItems={manageOwnOffers}
                toggleManageOwnItems={() => setManageOwnOffers(!manageOwnOffers)}
                type={modalType.offer} />
            {manageOwnOffers ?
                <OwnItemList
                    navigation={props.navigation}
                    deleteItem={deleteOffer}
                    getUserItems={getUserOffers} /> :
                <OpenItemList
                    navigation={props.navigation}
                    getLocalItems={getLocalOffers} />}
        </View>
    );
}
