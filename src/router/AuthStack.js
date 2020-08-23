import { createStackNavigator } from 'react-navigation-stack';
import ConfirmSignUp from '../components/Authentication/ConfirmSignUp';
import ForgotPassword from '../components/Authentication/ForgotPassword';
import LandingPage from '../components/Authentication/LandingPage';
import SignIn from '../components/Authentication/SignIn';
import SignUp from '../components/Authentication/SignUp';

export const AuthStack = createStackNavigator(
    {
        SignIn: {
            screen: SignIn
        },
        SignUp: {
            screen: SignUp
        },
        ForgotPassword: {
            screen: ForgotPassword
        },
        ConfirmSignUp: {
            screen: ConfirmSignUp
        },
        LandingPage: {
            screen: LandingPage
        },
    },
    {
        initialRouteName: 'LandingPage',
        headerMode: 'none'
    }
);