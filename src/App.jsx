import React, { Component } from 'react';
import AddTodos from './AddTodos';
import ViewTodos from './ViewTodos';
// import todoList from './Todos/savedTodos.json';
var todoList = [];
// var nnn = { 
//   key: Date.now(),
//   priority: '',
//   todo: '',
//   value: 'off'
// }
var todo;
var key;
var priority;
var value = 'off';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  componentDidUpdate(){
    //this is where the {updateJSONfile} function will go so that 
    //this.state.todoList is saved to file for app exit
  }
  updateTodoValue(e){
    todo = e.target.value
  }
  updatePriority(e){    
    priority = e.target.value    
  }
  clickHandler() {
    var newTodo = {
      key: Date.now(),
      priority,
      todo,
      value
  }
    this.setState((prevState) => {
      return { 
        todoList: prevState.todoList.concat(newTodo) 
      };
    }, () => (todoList = this.state.todoList));
   
  }
  
  render() {
    console.log(todoList)
    return (
      <div className='container'>
        <div className='header'>
          <h1>Very Simple To Do App</h1>
          <p className='title'>Track all of the things</p>
        </div>
        <div className='row p-2 body-base'>
          <AddTodos 
            updateTodoValue={this.updateTodoValue}
            updatePriority={this.updatePriority}
            clickHandler={this.clickHandler}
          />
          <ViewTodos
            todos={this.state.todoList}
          />
        </div>
      </div>
    );
  }
}

export default App;
