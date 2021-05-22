import React from 'react';
import Todos from './components/Todos/Todos';
import NewTodo from './components/NewTodo/NewTodo';
import './App.css';
import { TodosContextProvider } from './store/TodosContext';

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
