// LoginScreen.tsx

import React, {useState} from 'react';
import {View, Button, TextInput, Alert} from 'react-native';

import {NavigationProp, useNavigation} from '@react-navigation/native';

import useUserStore from '@providers/UserProvider';
import {StackParamList} from '@navigation/stack/types';

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const {user, login, logout, createUser} = useUserStore(state => ({
    user: state.user,
    login: state.login,
    logout: state.logout,
    createUser: state.createUser,
  }));

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigation.goBack();
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };

  const handleCreateUser = async () => {
    try {
      await createUser(email, password);
      Alert.alert('Successful', 'Account Creation Success!');
    } catch (error) {
      Alert.alert('User Creation Failed', error.message);
    }
  };

  const handleLogout = () => {
    try {
      logout();
      navigation.goBack();
    } catch (error) {
      Alert.alert('Logout Failed', error.message);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 30}}>
      {user ? (
        <Button title="Logout" onPress={handleLogout} />
      ) : (
        <>
          <TextInput
            placeholder="Email"
            value={email}
            autoCapitalize="none"
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Button title="Login" onPress={handleLogin} />
          <Button title="Create User" onPress={handleCreateUser} />
        </>
      )}
    </View>
  );
};

export default LoginScreen;
