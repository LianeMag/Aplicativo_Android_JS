import React, { useContext, useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import { BookContext } from './BookContext';

const ListaDeLivros = () => {
  const { books} = useContext(BookContext);
  const [pesquisa, setPesquisa] = useState('');

  // Função de pesquisa
  const pesquisarLivro = () => {
    if (pesquisa.trim() === '') {
      Alert.alert('Erro', 'Por favor, insira um termo de pesquisa.');
      return;
    }

    const resultado = books.filter((book) =>
      book.nome.toLowerCase().includes(pesquisa.toLowerCase())    
  );

    if (resultado.length > 0) {
      const lista = resultado.map((book) => `${book.nome} (Autor: ${book.autor}, Editora: ${book.editora})`).join('\n');
      Alert.alert('Livros encontrados', lista);
    } else {
      Alert.alert('Nenhum livro encontrado.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Livros</Text>

      {/* Campo de pesquisa */}
      <TextInput
        style={styles.input}
        placeholder="Pesquisar livro"
        value={pesquisa}
        onChangeText={setPesquisa}
      />
      <TouchableOpacity style={styles.button} onPress={pesquisarLivro}>
        <Text style={styles.buttonText}>Pesquisar</Text>
      </TouchableOpacity>

      <FlatList
        data={books}
        keyExtractor={( item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.bookTitle}>{item.nome}</Text>
            <Text>Autor: {item.autor}</Text>
            <Text>Editora: {item.editora}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f7e7ce'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#59372b',

  },
  input: {
    height: 50,
    width: '45%',
    borderColor: '#59372b',
    borderWidth: 1,
    marginBottom: 7,
    paddingHorizontal: 10,
    borderRadius: 5,

  },
  button: {
    backgroundColor: '#59372b',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    height: 40,
    width: '45%',
    marginTop: 10,
    marginBottom: 10

  },
  buttonText: {
    color: '#f7e7ce',
    fontSize: 17,

  },
  listContainer: {
    paddingBottom: 20,

  },
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#59372b',
    color: '#59372b',
    textAlign: 'center',
    marginVertical: 5,

  },

  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#59372b',
    
  },
});


export default ListaDeLivros;