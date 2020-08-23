import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  View
} from 'react-native';
import { Header, Text, Input, Button } from 'react-native-elements';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import { Auth } from 'aws-amplify';

export default function SignUp(props) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const signUpUser = async () => {
    if ((password !== confirmPassword) || username === '' || password === '') {
      setErrorMessage('Must provide a user name and a password');
      setPassword('')
      setConfirmPassword('')
      return
    }

    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email
        }
      })
      props.navigation.navigate('ConfirmSignUp')
    } catch (error) {
      setErrorMessage(error.message)
      setUsername('')
      setPassword('')
      setConfirmPassword('')
    }
  }

  return (

    <KeyboardAvoidingView
    >
      <Header
        placement="left"
        centerComponent={
          <Text
            h4
            style={{
              color: 'white'
            }}>
            Sign up
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
          onChangeText={(username) => setUsername(username.trim())}
          onFocus={() => setUsername('')}
          containerStyle={{
            marginVertical: 10
          }}
        />
        <Input
          placeholder='Email'
          onChangeText={(email) => setEmail(email.trim())}
          onFocus={() => setEmail('')}
          containerStyle={{
            marginVertical: 10
          }}
        />
        <Input
          secureTextEntry
          placeholder='Password'
          onChangeText={(password) => setPassword(password.trim())}
          onFocus={() => setPassword('')}
          containerStyle={{
            marginVertical: 10
          }}
        />
        <Input
          secureTextEntry
          placeholder='Confirm password'
          onChangeText={(password) => setConfirmPassword(password.trim())}
          onFocus={() => setConfirmPassword('')}
          containerStyle={{
            marginVertical: 10
          }}
        />

        <HideWithKeyboard>
          <View style={{
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Button
              title={'Sign up'}
              raised
              buttonStyle={{
                backgroundColor: '#FF7F50',
                paddingHorizontal: 25,
                paddingVertical: 10,
                flex: 1,
              }}
              onPress={signUpUser}
              containerStyle={{
                marginVertical: 20,
                flexDirection: 'row',
                justifyContent: 'center',
                width: '60%',

              }}
            />
            {/* </View> */}
            <TouchableOpacity
              onPress={() => props.navigation.navigate('LandingPage')}
            >
              <Text style={{
                paddingHorizontal: 25,
                paddingVertical: 10,
                textAlign: 'center'
              }}>Go back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('SignIn')}
            >
              <Text style={{
                paddingHorizontal: 25,
                paddingVertical: 10,
                textAlign: 'center'
              }}>Already have an account? Log in!</Text>
            </TouchableOpacity>
            <Text style={{
              marginVertical: 10,
              textAlign: 'center'
            }}>
              {errorMessage}
            </Text>
          </View>
        </HideWithKeyboard>
      </View>
    </KeyboardAvoidingView >
  )
}