import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import RequestsPage from '../components/Requests/RequestsPage';
import OffersPage from '../components/Offers/OffersPage';
import ChatPage from '../components/Chat/ChatPage';
import SettingsPage from '../components/Settings/SettingsPage';

export const AppStack = createMaterialBottomTabNavigator(
    {
        Requests: {
            screen: RequestsPage,
            navigationOptions: {
                tabBarLabel: 'Requests',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon color={tintColor} size={25} name={'shopping-cart'} type='font-awesome' />
                    </View>),
            }
        },
        Offers: {
            screen: OffersPage,
            navigationOptions: {
                tabBarLabel: 'Offers',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon color={tintColor} size={25} name={'gift'} type='font-awesome' />
                    </View>),
            }
        },
        Messages: {
            screen: ChatPage,
            navigationOptions: {
                tabBarLabel: 'Messages',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon color={tintColor} size={25} name={'envelope'} type='font-awesome' />
                    </View>),
            }
        },
        Settings: {
            screen: SettingsPage,
            navigationOptions: {
                tabBarLabel: 'Settings',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon color={tintColor} size={25} name={'gear'} type='font-awesome' />
                    </View>),
            }
        },
    },
    {
        shifting: true,
        initialRouteName: 'Requests',
        activeColor: 'white',
        inactiveColor: 'white',
        barStyle: {
            backgroundColor: 'grey'
        }
    }
);