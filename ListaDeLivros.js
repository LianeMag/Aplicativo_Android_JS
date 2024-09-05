import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { BookContext } from './BookContext';

const ListaDeLivros = () => {
  const { books } = useContext(BookContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Livros</Text>
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
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ListaDeLivros;
