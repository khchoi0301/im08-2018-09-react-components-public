import React from 'react';
import ReactDOM from 'react-dom';

/*  // 1st
con TodoList = (props) => (
  <ul>
    <li>{props.todos[0]}</li>
    <li>{props.todos[1]}</li>
    <li>{props.todos[2]}</li>
  </ul>
);

var items =
  [
    'Learn React',
    'Crush Recast.ly',
    'Maybe sleep',
  ];

const onListItemClick = (event) => {
  console.log('I got clicked');
};

const TodoList = (props) => {
  return (
    <ul>
      <li onClick={onListItemClick}>{props.todos[0]}</li>
      <li>{props.todos[1]}</li>
      <li>{props.todos[2]}</li>
    </ul>
  )
}

const App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={[
      'Learn React',
      'Crush Recast.ly',
      'Maybe sleep',
    ]}
    />
  </div>
)
*/

/* 2
const App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={[
      'Learn React',
      'Crush Recast.ly',
      'Maybe sleep',
    ]}
    />
  </div>
)

const TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <TodoListItem todo={todo} />
    )}
  </ul>
)

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    })
  }

  render() {
    const style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    }
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    )
  }
}
*/

const veges = ['cucumbers', 'kale', 'tomato']

const App = () => (
  <div>
    <h2> Grocery List Item </h2>
    <GroceryList todos={veges} />
  </div>
)

const GroceryList = (props) => {
  return (
    <ul>
      {
        props.todos.map((todo, index) =>
          <GroceryListItem todo={todo} key={index} />
        )
      }
    </ul>
  )
}

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      done: false,
      over: false
    }
  }
  onListItemClick() {
    this.setState({
      done: !this.state.done
    })
  }
  onListItemOver() {
    this.setState({
      over: !this.state.over
    })
  }

  render() {
    const style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.over ? 'bold' : 'normal'
    }
    return (
      <li style={style} onMouseOver={this.onListItemOver.bind(this)} onMouseOut={this.onListItemOver.bind(this)}
        onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

    // Need to Delete
    // import './index.css';
    // import App from './App';
    // import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

    // // If you want your app to work offline and load faster, you can change
    // // unregister() to register() below. Note this comes with some pitfalls.
    // // Learn more about service workers: http://bit.ly/CRA-PWA
    // serviceWorker.unregister();
