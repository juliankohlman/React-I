import React, { Component } from 'react';

import Todo from './Todo';

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
      // [ {text: 'do this', key: 0, style: none}]
    };
  }

  handleNewTodo = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  addTodo = (event) => {
    event.preventDefault();
    const todoList = this.state.todos;
    todoList.push(this.state.newTodo);
    this.setState({
      newTodo: '',
      todos: todoList
    });
  }

  render() {
    return (
      <div>

        <form onSubmit={this.addToDo}>
          <input
          type="text"
          onChange={this.handleNewTodo}
          placeholder="Add a task"
          value={this.state.newTodo}
          />
        </form>
          {this.state.todos.map((todo, i) => <Todo key={i} item={todo} />)}
      </div>
    );
  }
}

export default ToDoList;