import React, { useState } from 'react';
import Todos from './components/Todos';
import './App.css';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './store/todo-context';

function App() {
  

  
  
  return (
    <div >
      <TodosContextProvider>
          <NewTodo  />
          <Todos />
      </TodosContextProvider>
      
     
    </div>
  );
}

export default App;
