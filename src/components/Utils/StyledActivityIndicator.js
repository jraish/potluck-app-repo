import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Overlay } from 'react-native-elements';

export default class StyledActivityIndicator extends React.Component {
    render() {
        return (
            <Overlay
                fullScreen
                isVisible={true}
                overlayStyle={{
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}>
                <ActivityIndicator style='large' />
            </Overlay>
        )
    }
}