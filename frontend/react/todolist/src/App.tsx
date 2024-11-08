import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

function App() {
  let name = "리액트"
  return (
    <div className="container">
      <TodoList></TodoList>
    </div>
  );
  // const port = undefined
  // return (
  //   <div>
  //     {
  //       port || "3000"
  //     }
  //   </div>
  // )
}

export default App;
