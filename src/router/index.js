import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthLoading from '../components/Authentication/AuthLoading';
import {AuthStack} from './AuthStack';
import {AppRootStack} from './AppRootStack';

export const AppContainer = createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: AuthLoading,
            App: AppRootStack,
            Auth: AuthStack
        },
        {
            initialRouteName: 'AuthLoading'
        }
    )
);