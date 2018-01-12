import React, { Component } from 'react';
import Todo from './tdDemo';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      newTodoText: '',
      todos: ['Learn React', 'Watch a movie', 'Wash Dishes']
    }
    // bind your methods
    this.updateNewTodo = this.updateNewTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  updateNewTodo(event) {
    this.setState({ newTodoText: event.target.value });
  }

  addTodo(event) {
    // stop default browser behavior
    event.preventDefault();
    const updatedTodos  = this.state.todos.slice(0);
    updatedTodos.push(this.state.newTodoText);
    this.setState({
      newTodoText: '',
      todos: updatedTodos
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <input type="text" onChange={this.updateNewTodo} placeholder="new task" value={this.state.newTodoText} />
        </form>
          <ul>
            {this.state.todos.map((item, i) => <Todo key={i} item={item} />)}
          </ul>
      </div>
    );
  }
}

export default TodoList;