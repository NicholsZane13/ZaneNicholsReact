import React, { useState, useEffect } from "react";
import './App.css';
//Importing Components
import Form from "./components/form";
import TodoList from "./components/todolist";


function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filteredHandler(); 
  }, [todos, status]);

    const filteredHandler = () => {
      switch(status){
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'incomplete':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    }
    return (
      <div className="App">
        <header>
          <h1>The Todo List</h1>
        </header>
        <Form 
        inputText={inputText}
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
         />
  
        <TodoList 
        setTodos={setTodos} 
        todos={todos} 
        filteredTodos={filteredTodos}/>
      </div>
    )};
  
    

    



export default App;
