// Login.js
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'nome' && password === '1234') {
      navigation.navigate('Home');
    } else {
      alert("Usuário ou Senha inválidos.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Livraria</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor = "#59372b"
        placeholder="Nome do usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha do usuário"
        placeholderTextColor = "#59372b"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f7e7ce',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#59372b'
  },
  input: {
    height: 50,           // Ajusta a altura do campo de entrada
    width: '30%',         // Ajusta a largura do campo de entrada
    borderColor: '#59372b',
    borderWidth: 1,
    marginBottom: 7,
    paddingHorizontal: 5, // Adiciona padding horizontal interno
    borderRadius: 5,       // Adiciona bordas arredondadas
  },
  button: {
    backgroundColor: '#59372b', 
    padding: 13,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#f7e7ce', 
    fontSize: 15,
  },
});

export default Login;
