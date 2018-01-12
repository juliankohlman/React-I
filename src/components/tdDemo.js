// import React from 'react';

// const Todo = (props) => {
//   return (
//     <li>{props.item}</li>
//   );
// }

// export default Todo;

// Stateful Todo component
import React, { Component } from 'react';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      completed: false
    }
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  // ONLY CUSTOM METHODS NEED TO BE BOUND
  toggleCompleted() {
    this.setState({
      completed: !this.state.completed
    });
  }

  render() {
    const styles = this.state.completed ? { textDecoration : 'line-through' } : { textDecoration: 'none' };
    return (
      <div style={styles} onClick={this.toggleCompleted}>{this.props.item}</div>
    );
  }
}

export default Todo;
