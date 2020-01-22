import React from 'react';
import logo from './logo.svg';
import './App.css';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import todoReducer from './reducers/reducer';


// this.state = {
//   todoList: todo,
// };
// }

// toggleTodo = id => {

// const newTodoList = this.state.todoList.map(todo => {
//   if (todo.id === id) {
//     return {
//       ...todo,
//       completed: !todo.completed
//     };
//   } else {
//     return todo;
//   }
// });

// this.setState({
//     todoList: this.state.todoList
// });
// };

// addTodo = todoName => {
// const newTodo = {
//   name: todoName,
//   id: Date.now(),
//   completed: false
// };
// this.setState({
//   todoList: [...this.state.todoList, newTodo]
// });
// };

// deleteTodo = () => {
// const clearCompleted = this.state.todoList.filter(todo => {
// return todo.completed === false;
// })
// this.setState ({
// todoList : clearCompleted
// }) 
// console.log(clearCompleted);
// };


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
Set an initial state value through a reducer and render a list of todos from that state
Add a form that dispatches an "ADD_TODO" action to be able to add a todo item to your list
Build a function that let's you mark todo items as completed when you click on them
Biuld a function that let's you clear completed todos when you click on a "Clear Completed" button
        </p>
  
      </header>

  
  
      <div className="header">
        <h2>To-Do List:</h2>
      </div>
    
      <div className="form">
        <TodoForm addTodo={this.addTodo} />
      </div>
    
      <div className="list">
        <TodoList 
          todo={this.state.todoList}
          toggleTodo={this.toggleTodo}
        />
      </div>

      <button className="clear-btn" onClick={this.deleteTodo}>
              Clear Completed To-Do's
      </button>
    </div>
  );
}

export default App;