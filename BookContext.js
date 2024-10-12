import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  // Carregar livros do AsyncStorage ao iniciar
  useEffect(() => {
    const loadBooks = async () => {
      try {
        const storedBooks = await AsyncStorage.getItem('books');
        if (storedBooks) {
          setBooks(JSON.parse(storedBooks));
        }
      } catch (error) {
        console.error('Erro ao carregar os livros', error);
      }
    };
    loadBooks();
  }, []);

  // Salvar livros no AsyncStorage
  const saveBooks = async (newBooks) => {
    try {
      await AsyncStorage.setItem('books', JSON.stringify(newBooks));
    } catch (error) {
      console.error('Erro ao salvar os livros', error);
    }
  };

  // Função para adicionar livro
  const addBook = (newBook) => {
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
    saveBooks(updatedBooks); // Salvar no AsyncStorage
  };

  // Função para atualizar um livro (caso precise)
  const updateBook = (oldBook, newBook) => {
    const updatedBooks = books.map((book) => (book === oldBook ? newBook : book));
    setBooks(updatedBooks);
    saveBooks(updatedBooks); // Salvar no AsyncStorage
  };

  // Função para remover um livro
  const removeBook = (bookToRemove) => {
    const updatedBooks = books.filter((book) => book !== bookToRemove);
    setBooks(updatedBooks);
    saveBooks(updatedBooks); // Salvar no AsyncStorage
  };

  return (
    <BookContext.Provider value={{ books, addBook, updateBook, removeBook }}>
      {children}
    </BookContext.Provider>
  );
};
