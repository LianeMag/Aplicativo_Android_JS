// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BookProvider } from './BookContext';
import Login from './Login';
import Home from './Home';
import AdicionarLivros from './AdicionarLivros';
import ListaDeLivros from './ListaDeLivros';
import RetiradaDeLivro from './RetiradaDeLivro';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <BookProvider>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Livraria' }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Livraria' }}
          />
          <Stack.Screen
            name="AdicionarLivros"
            component={AdicionarLivros}
            options={{ title: 'Livraria' }}
          />
          <Stack.Screen
            name="ListaDeLivros"
            component={ListaDeLivros}
            options={{ title: 'Livraria' }}
          />
          <Stack.Screen
            name="RetiradaDeLivro"
            component={RetiradaDeLivro}
            options={{ title: 'Livraria' }}
          />
        </Stack.Navigator>
      </BookProvider>
    </NavigationContainer>
  );
};

export default App;
