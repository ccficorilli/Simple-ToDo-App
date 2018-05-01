import React, { Component } from 'react';
import AddTodos from './AddTodos';
import ViewTodos from './ViewTodos';
import EditBox from './EditBox';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: '',
      todoList: [],
      todo: '',
      priority: 0,
      finishedTodo: false,
      isEditable: [false, undefined],
      etodo:'',
      epriority: 0
    };
    this.postTodoItem = this.postTodoItem.bind(this);
    this.updateCheckbox = this.updateCheckbox.bind(this);
    this.deleteTodos = this.deleteTodos.bind(this);
    this.editTodos = this.editTodos.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
    this.setPriority = this.setPriority.bind(this);
    this.setTodoValue = this.setTodoValue.bind(this);
    this.editPriorityValue = this.editPriorityValue.bind(this);
    this.editTodoValue = this.editTodoValue.bind(this);
  }
  componentDidMount(){
    //this is where the {updateJSONfile} function will go so that 
    //this.state.todoList is saved to file for app exit
    
  }
  setTodoValue(e){
    this.setState({
      todo: e.target.value
    })
  }
  setPriority(e){    
    this.setState({
      priority: e.target.value    
    })
  }
  editTodoValue(e){
    this.setState({
      etodo: e.target.value
    })
  }
  editPriorityValue(e){    
    this.setState({
      epriority: e.target.value    
    })  
  }
  deleteTodos(e){
    if (confirm("Are you sure you want to delete this?")) {
      var i = e.target.value;
      var todoList = this.state.todoList;
      todoList.splice(i,1)
      this.setState({
        todoList
      });
    }
  }  
  editTodos(e) {
      var todoList = this.state.todoList;
      var i = e.target.value;
      var editCheck = todoList.filter(data => data.isEditable[0] === true);
      if(editCheck.length === 0){
        todoList[i].isEditable = [true, i];
        this.setState({
          todoList,
          etodo: todoList[i].todo,
          epriority: todoList[i].priority
        });
    } else alert('Remember --only one edit at a time, please')
  }
  submitEdit(e){
    var todoList = this.state.todoList;
    var i = e.target.value;
    todoList[i].todo = this.state.etodo;
    todoList[i].priority = this.state.epriority;
    todoList[i].isEditable = [false, undefined]
    this.setState({
      todoList,
      etodo: '',
      epriority: 0
    }, () => console.log('updated successfully'));

  }
  updateCheckbox(e){
    var todoList = this.state.todoList;
    var i = e.target.value;
    if(e.target.checked){
      todoList[i].finishedTodo = 'strike-through';
      this.setState({
        todoList
     });
    } else 
      todoList[i].finishedTodo = '';
      this.setState({
        todoList
     });
  };
  postTodoItem() {
    var newTodo = {
      priority: this.state.priority,
      todo: this.state.todo,
      finishedTodo: this.state.finishedTodo,
      isEditable: this.state.isEditable,
      key: Date.now()
    }
    if(newTodo.todo ==  '') {
        return alert('Please write something to do...')
    } if(newTodo.priority === 0) {
        return alert('Please select a priority with your to do...')    
    } this.setState((prevState) => {
        return { 
          todoList: prevState.todoList.concat(newTodo),
          todo: '',
          priority: 0,
          finishedTodo: false,
          isEditable: [false, undefined],
          key: ''
        };      
      });
  }

render() {
    // console.log(todoList)
    return (
      <div className='container'>
        <div className='header'>
          <h1>Not-So Simple To Do App</h1>
          <p className='title'>Track all of the things</p>
        </div>
        <div className='row p-2 body-base'>
          <AddTodos 
                  setTodoValue={this.setTodoValue}
                  setPriority={this.setPriority}
                  postTodoItem={this.postTodoItem}
                  text={this.state.todo}
                  priority={this.state.priority}
          />
          <ViewTodos
                  editPriorityValue={this.editPriorityValue}
                  editTodoValue={this.editTodoValue}
                  todoList={this.state.todoList}
                  updateCheckbox={this.updateCheckbox}
                  deleteTodos={this.deleteTodos}
                  editTodos={this.editTodos}
                  submitEdit={this.submitEdit}
          />
        </div>
      </div>
    );
  }
}

export default App;
