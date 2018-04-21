import React, { Component } from 'react';
import AddTodos from './AddTodos';
import ViewTodos from './ViewTodos';
import EditBox from './EditBox';
// import todoList from './Todos/savedTodos.json';
var todoList = [];
// var nnn = { 
//   key: Date.now(),
//   priority: '',
//   todo: '',
//   value: 'off'
// }
var todo = '';
var key;
var priority;
var done = false;
var isEditable = [false,undefined];
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.updateCheckbox = this.updateCheckbox.bind(this);
    this.deleteTodos = this.deleteTodos.bind(this);
    this.editTodos = this.editTodos.bind(this);
  }
  componentDidMount(){
    //this is where the {updateJSONfile} function will go so that 
    //this.state.todoList is saved to file for app exit
    
  }
  updateTodoValue(e){
    todo = e.target.value
  }
  updatePriority(e){    
    priority = e.target.value    
  }
 
  deleteTodos(e){
    if (confirm("Are you sure you want to delete this?")) {
      var i = e.target.value;
      todoList.splice(i,1);
      this.setState({
        todoList
      });
    }
  }  
  editTodos(e) {
    
      var i = Number(e.target.value);
      var editCheck = todoList.filter(data => data.isEditable[0] === true);
      console.log ({editCheck}.length)
      if(editCheck.length === 0){
        todoList[i].isEditable = [true, i]
        this.setState({
          todoList
        });
      // } else console.log(this.props.todos);
      //   
    } alert('Only one edit at a time, please')
  }
  updateCheckbox(e){
    // console.log(e.target.checked)
    // console.log(todoList)
    
    var i = e.target.value;
    // console.log(typeof e.target.checked)
    if(e.target.checked){
      todoList[i].done = 'strike-through';
      this.setState({
        todoList
     });
    } else 
      todoList[i].done = '';
      this.setState({
        todoList
     });
  };
  clickHandler() {
    var newTodo = {
      key: Date.now(),
      priority,
      todo,
      done,
      isEditable
    }
    // if(newTodo.todo === undefined || ''){
    //   return alert('Please submit a to do...');
    // } else 
    if(newTodo.todo ==  '') {
        return alert('Please submit a to do...')
    } if(newTodo.priority === undefined || '') {
        return alert('Please submit a priority with your to do...')    
    } this.setState((prevState) => {
        return { 
          todoList: prevState.todoList.concat(newTodo)
        };      
      }, () => todoList.push(newTodo));
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
            todoList={todoList}
          />
          <ViewTodos
            todos={this.state.todoList}
            updateCheckbox={this.updateCheckbox}
            deleteTodos={this.deleteTodos}
            editTodos={this.editTodos}
          />
        </div>
      </div>
    );
  }
}

export default App;
