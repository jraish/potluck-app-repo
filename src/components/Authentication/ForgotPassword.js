import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  View
} from 'react-native';
import { Auth } from 'aws-amplify';
import { Header, Input, Button, Text } from 'react-native-elements';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

export default function ForgotPassword(props) {
  const [username, setUsername] = useState('')
  const [resetCode, setResetCode] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [resetPassword, setResetPassword] = useState(false)
  const [recoverButtonText, setRecoverButtonText] = useState('Recover password')
  const [errorMessage, setErrorMessage] = useState('')

  const resetPasswordRequest = () => {
    if (resetPassword) {
      if (username !== '' &&
        newPassword !== '' &&
        resetCode !== '') {
        Auth.forgotPasswordSubmit(
          username,
          resetCode,
          newPassword)
          .then(data => {
            props.navigation.navigate('SignIn')
          })
          .catch(err => {
            setErrorMessage(err.message)
          });
      } else {
        setErrorMessage('Please enter a user name, reset code, and new password.')
      }
    } else {
      if (username !== '') {
        Auth.forgotPassword(username)
          .then(data => {
            setResetPassword(true)
          })
          .catch(err => {
            setErrorMessage(err.message)
          });
      } else {
        setErrorMessage('Please enter a user name.')
      }
    }
  }

  const resetPasswordFields = () => {
    return resetPassword ? (
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
          placeholder='Reset code'
          onChangeText={(resetCode) => setResetCode(resetCode.trim())}
          onFocus={() => setResetCode('')}
          containerStyle={{
            marginVertical: 10
          }}
        />
        <Input
          placeholder='New password'
          onChangeText={(newPassword) => setNewPassword(newPassword.trim())}
          onFocus={() => setNewPassword('')}
          containerStyle={{
            marginVertical: 10
          }}
        />
        {renderButtons()}
      </View>
    ) : (
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
          {renderButtons()}
        </View>
      )
  }

  const renderButtons = () => {
    return (
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
            title={recoverButtonText}
            raised
            buttonStyle={{
              backgroundColor: '#FF7F50',
              paddingHorizontal: 25,
              paddingVertical: 10,
              flex: 1,
            }}
            onPress={resetPasswordRequest}
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
            onPress={() => props.navigation.navigate('SignIn')}
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
    )
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
    >
      <Header
        placement="left"
        centerComponent={
          <Text
            h4
            style={{
              color: 'white'
            }}>
            Forgot your password?
          </Text>
        }
        backgroundColor={'#FF7F50'}
        style={{ marginBottom: 0 }} />

      {resetPasswordFields()}
    </KeyboardAvoidingView>
  )
}