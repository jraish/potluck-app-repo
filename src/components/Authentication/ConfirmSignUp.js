import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  View
} from 'react-native';
import { Auth } from 'aws-amplify';
import { Header, Input, Button, Text } from 'react-native-elements';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

export default function ConfirmSignUp(props) {
  const [username, setUsername] = useState('')
  const [confirmationCode, setConfirmationCode] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const confirmUser = async () => {
    Auth.confirmSignUp(username, confirmationCode)
      .then(result => {
        props.navigation.navigate('AuthLoading')
      })
      .catch(err => {
        setErrorMessage(err.message)
      })
  }

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
            Verify your user name
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
          placeholder='Confirmation code'
          onChangeText={(confirmationCode) => setConfirmationCode(confirmationCode.trim())}
          onFocus={() => setConfirmationCode('')}
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
              title={'Confirm'}
              raised
              buttonStyle={{
                backgroundColor: '#FF7F50',
                paddingHorizontal: 25,
                paddingVertical: 10,
                flex: 1,
              }}
              onPress={confirmUser}
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
              onPress={() => props.navigation.navigate('LandingPage')}
            >
              <Text style={{
                paddingHorizontal: 25,
                paddingVertical: 10,
                textAlign: 'center'
              }}>Go back</Text>
            </TouchableOpacity>
            <Text style={{
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