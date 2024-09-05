// RetiradaDeLivro.js
import React, { useContext, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, FlatList } from 'react-native';
import { BookContext } from './BookContext';

const RetiradaDeLivro = () => {
  const [livro, setLivro] = useState('');
  const { books, removeBook } = useContext(BookContext);

  const retirarLivro = () => {
    if (livro.trim() !== '' && books.includes(livro)) {
      removeBook(livro);
      setLivro(''); // Limpa o campo após a remoção
    } else {
      alert("Livro não encontrado na lista.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Retirada de Livro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do livro"
        value={livro}
        onChangeText={setLivro}
      />
      <Button title="Retirar" onPress={retirarLivro} />
      <FlatList
        data={books}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default RetiradaDeLivro;
