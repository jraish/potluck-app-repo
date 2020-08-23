import { createStackNavigator } from 'react-navigation-stack';
import { AppStack } from './AppStack';
import ExistingItemModal from '../components/Modals/ExistingItemModal';
import AddItemModal from '../components/Modals/AddItemModal';
import EditOwnItemModal from '../components/Modals/EditOwnItemModal';
import ChatModal from '../components/Modals/ChatModal';

export const AppRootStack = createStackNavigator(
    {
        Main: AppStack,
        ExistingItemModal: ExistingItemModal,
        AddItemModal: AddItemModal,
        EditOwnItemModal: EditOwnItemModal,
        ChatModal: ChatModal
    },
    {
        headerMode: 'none',
    }
)
