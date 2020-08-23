import React from 'react';
import { View } from 'react-native';
import {
    Text,
    Button
} from 'react-native-elements';

export default function LandingPage(props) {
    return (
        <View
            style={{
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                paddingVertical: 10
            }}>
            <View style={{
                marginTop: '30%'
            }}>
                <Text h2>Some</Text>
                <Text h2>landing page</Text>
                <Text h2>text</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                marginTop: 25
            }}>
                <Button
                    title={'Log in'}
                    raised
                    buttonStyle={{
                        borderColor: '#FF7F50',
                        borderWidth: 1,
                        backgroundColor: '#FF7F50',
                        paddingHorizontal: 25,
                        paddingVertical: 10
                    }}
                    onPress={() => props.navigation.navigate('SignIn')}
                    containerStyle={{
                        marginVertical: 20,
                        marginHorizontal: 15
                    }}
                />
                <Button
                    title={'Sign up'}
                    buttonStyle={{
                        borderColor: '#FF7F50',
                        borderWidth: 1,
                        backgroundColor: 'white',
                        paddingHorizontal: 25,
                        paddingVertical: 10
                    }}
                    titleStyle={{
                        color: '#FF7F50'
                    }}
                    onPress={() => props.navigation.navigate('SignUp')}
                    containerStyle={{
                        marginVertical: 20,
                        marginHorizontal: 15
                    }}
                />
            </View>
        </View>
    )
}