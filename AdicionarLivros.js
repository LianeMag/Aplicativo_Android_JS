import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { BookContext } from './BookContext';

const AdicionarLivros = () => {
  const [livro, setLivro] = useState('');
  const { addBook } = useContext(BookContext);

  const adicionarLivro = () => {
    if (livro.trim() !== '') {
      addBook(livro);
      setLivro(''); // Limpa o campo após adicionar
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do livro"
        value={livro}
        onChangeText={setLivro}
      />
      <Button title="Adicionar" onPress={adicionarLivro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default AdicionarLivros;
