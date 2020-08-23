import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    TouchableOpacity,
    View
} from 'react-native';
import { Header, Text, Input, Button } from 'react-native-elements';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import { Auth } from 'aws-amplify';
import { getUserById, addUserToDB } from '../../server/users';

export default function SignIn(props) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const signInUser = async () => {
        if (userName !== '' && password !== '') {
            try {
                await Auth.signIn(userName, password);
                const signedInUser = await Auth.currentUserInfo();
                const { attributes, username } = signedInUser;;
                const response = await getUserById(attributes.sub)
                if (!response) {
                    const newUser = await addUserToDB(attributes.sub, username)
                    console.log(`New user created: ${newUser}`)
                }
                props.navigation.navigate('Requests')
            } catch (err) {
                if (err.code == 'UserNotConfirmedException') {
                    props.navigation.navigate('ConfirmSignUp')
                } else {
                    setErrorMessage(err.message)
                }
            }
        } else {
            setErrorMessage('Please provide a user name and password')
        }
    };

    return (
        <KeyboardAvoidingView>
            <Header
                placement="left"
                centerComponent={
                    <Text
                        h4
                        style={{
                            color: 'white'
                        }}>
                        Sign in
                        </Text>
                }
                backgroundColor={'#FF7F50'}
                style={{ marginBottom: 0 }} />
            <View
                style={{
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    paddingVertical: 10
                }}>
                <Input
                    placeholder='User name'
                    onChangeText={(userName) => setUserName(userName.trim())}
                    onFocus={() => setUserName('')}
                    containerStyle={{
                        marginVertical: 10
                    }}
                />
                <Input
                    placeholder='Password'
                    secureTextEntry
                    onChangeText={(password) => setPassword(password.trim())}
                    onFocus={() => setPassword('')}
                    containerStyle={{
                        marginVertical: 10
                    }}
                />
                <View style={{
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                        <Button
                            title={'Sign in'}
                            raised
                            buttonStyle={{
                                backgroundColor: '#FF7F50',
                                paddingHorizontal: 25,
                                paddingVertical: 10,
                                flex: 1,
                            }}
                            onPress={signInUser}
                            containerStyle={{
                                marginVertical: 20,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                width: '60%',

                            }}
                        />
                    </View>
                    <HideWithKeyboard>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('ForgotPassword')}
                        >
                            <Text style={{
                                marginHorizontal: 25,
                                marginVertical: 10,
                                textAlign: 'center'
                            }}>Forgot your password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('SignUp')}
                        >
                            <Text style={{
                                marginHorizontal: 25,
                                marginVertical: 10,
                                textAlign: 'center'
                            }}>Not signed up? Register now!</Text>
                        </TouchableOpacity>
                        <Text style={{
                            marginHorizontal: 25,
                            marginVertical: 10,
                            textAlign: 'center'
                        }}>
                            {errorMessage}
                        </Text>
                    </HideWithKeyboard>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}