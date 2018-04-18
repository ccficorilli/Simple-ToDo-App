import React, { Component } from 'react';
import AddTodos from './AddTodos';
// import ViewTodos from './ViewTodos';
import todoList from './Todos/savedTodos.json';
import TodoItems from './TodoItems';

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
    // this.setState({
    //   todoList
    // });
  }
  // displayTodoList() {
  //   if (this.state.todoList.length !== 0 || undefined) {
  //     this.state.todoList.map(data => (
  //       <div className={ `well w-100 todoListed ${data.priority}` }>
  //         <input type='checkbox' value='on' />{data.todo}
  //       </div>));
  //   }
  //   return (<div className='well w-100 todoListed'>Welcome to Very Simple Todo App!
  //                   <p>Get started now by adding a new todo on the left.</p>
  //     </div>);
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
              <div className='holding-cell w-100 rounded'>
                <TodoItems
                  todos={ this.state.todoList }
                  quantity={ this.state.todoList.length}
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
