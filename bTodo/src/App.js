import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/layout/AddTodo';
import uuid from 'uuid';
import About from './components/pages/About';
 
class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'take a breakfast',
        completed: false
      },
      {
        id: 2,
        title: 'go to the office',
        completed: true
      },
      {
        id: 3,
        title: 'stand up',
        completed: false
      }
    ]
  }
  
  // toggle complete
  markComplete = (id) => {
    this.setState({ todos:this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }
  
  //delete todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id 
    !== id)] });
  }
  
  //add todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                delTodo={this.delTodo}/>
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
