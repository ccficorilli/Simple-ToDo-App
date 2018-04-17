import React, { Component } from 'react';
import AddTodos from './AddTodos';
// import ViewTodos from './ViewTodos';
import todoList from './Todos/savedTodos.json';
import TodoItems from './TodoItems';
import EmptyTodos from './EmptyTodos';

// const todoList = []
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: []
    };
    // this.displayTodos = this.displayTodos.bind(this);
  }
  componentWillMount() {
    this.setState({
      todoList
    })
    // this.displayTodoList;
  }
  // displayTodoList() {
  //   let buildTheList;
  //   if (this.state.todoList.length === 0) {
  //    buildTheList = <EmptyTodos />;
  //    return buildTheList;
  //   }buildTheList = this.state.todoList.map(props => <TodoItems />);
  //    console.log(typeof buildTheList);
  //    return buildTheList;
  //   }

  render() {
    return (
      <div className='container'>
        <div className='header'>
          <h1>Very Simple To Do App</h1>
          <p className='title'>Track all of the things</p>
        </div>
        <div className='row p-2 body-base'>
          <AddTodos />
          <div className='col-sm-8 p-3'>
            <div className='viewTodos bg-light w-100'>
              <div className='panel mt-1 mb-1 p-2 pl-3 bg-custom txt-sm'>View To-Do:</div>
              
                <TodoItems
                   todos={this.state.todoList}
                />
              
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
