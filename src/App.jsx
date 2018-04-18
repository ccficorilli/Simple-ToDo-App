import React, { Component } from 'react';
import AddTodos from './AddTodos';
import ViewTodos from './ViewTodos';
// import todoList from './Todos/savedTodos.json';
var todoList = [];
var temp = {
  "todo":"",
  "key":"",
  "priority":"",
  "complete":false
};
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
    temp.todo = e.target.value
  }
  updatePriority(e){    
    temp.priority = e.target.value    
  }
  clickHandler() {
    temp.key = Date.now();
    const l = this.state.todoList.length;
    todoList.push(temp)
    
    this.setState({    
        todoList
    },console.log(this.state.todoList));
  }
  
  render() {
    
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
