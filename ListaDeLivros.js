import React, { useContext } from 'react';
import {  View, StyleSheet, Text, FlatList } from 'react-native';
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
    backgroundColor: '#f7e7ce'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#59372b',
  },
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#59372b',
    width: '100%',
    color: '#59372b',
    backgroundColor: '#f7e7ce'
  },
  list: {
    width: '100%',
  },
});

export default ListaDeLivros;
