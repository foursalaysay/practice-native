import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet, Platform } from 'react-native';
import { TextInput, GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Login Info', `Email: ${email}\nPassword: ${password}`);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.mainView}>
        <Text style={styles.label}>
          Email:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
          value={email}
        />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 16,
  },
  title: {
    color: 'white',
  },
  label: {
    textAlign : 'left',
    fontSize: 18,
    marginBottom: 8,
    color : 'white'
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
    width: '80%',
    marginBottom: 16,
  },
  buttonStyle: {
    width: '80%',
    height: 40,
  },
});
