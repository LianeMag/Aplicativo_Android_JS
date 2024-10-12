import React, { useContext, useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import { BookContext } from './BookContext';

const ListaDeLivros = () => {
  const { books, updateBook } = useContext(BookContext);
  const [pesquisa, setPesquisa] = useState('');
  const [livroAntigo, setLivroAntigo] = useState('');
  const [livroAtualizado, setLivroAtualizado] = useState('');

  // Função de pesquisa
  const pesquisarLivro = () => {
    if (pesquisa.trim() === '') {
      Alert.alert('Erro', 'Por favor, insira um termo de pesquisa.');
      return;
    }

    const resultado = books.filter((book) =>
      typeof book === 'string' && book.toLowerCase().includes(pesquisa.toLowerCase())
    );

    if (resultado.length > 0) {
      Alert.alert('Livros encontrados', resultado.join(', '));
    } else {
      Alert.alert('Nenhum livro encontrado.');
    }
  };

  // Função de atualizar
  const atualizarLivro = () => {
    if (livroAntigo.trim() === '' || livroAtualizado.trim() === '') {
      Alert.alert('Por favor, preencha ambos os campos.');
      return;
    }
    const livroExiste = books.includes(livroAntigo);
    if (!livroExiste) {
      Alert.alert('Erro', 'O livro antigo não foi encontrado.');
      return;
    }

    // Atualiza o livro
    updateBook(livroAntigo, livroAtualizado);
    setLivroAntigo('');
    setLivroAtualizado('');
    Alert.alert('Livro atualizado com sucesso!');
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

      {/* Atualizar livro */}
      <Text style={styles.title2}>Mudar Nome do Livro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome antigo"
        value={livroAntigo}
        onChangeText={setLivroAntigo}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome novo"
        value={livroAtualizado}
        onChangeText={setLivroAtualizado}
      />
      <TouchableOpacity style={styles.button} onPress={atualizarLivro}>
        <Text style={styles.buttonText}>Atualizar</Text>
      </TouchableOpacity>

      {/* Lista de livros */}
      <FlatList
        style={styles.list}
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
    backgroundColor: '#f7e7ce'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#59372b',
  },
  title2: {
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
  list: {
    marginTop: 20,
    width: '80%',
  },
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#59372b',
    color: '#59372b',
    textAlign: 'center',
  },
});

export default ListaDeLivros;