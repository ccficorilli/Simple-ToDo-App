import React, { Component } from 'react';

class TodoItems extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        if(this.props.todoList.length > 0) {
            return (<div className='holding-cell w-100 rounded'>
                        <ul className= 'well w-100 todoListed'>        
                        {this.props.todoList.map( (data, i) => 
                            (<li className={`success bg${data.priority} bucket`} 
                                 key={data.key}>                               
                                <input className='checkbox'
                                       type='checkbox' 
                                       value={i}
                                       onChange={e => this.props.updateCheckbox(e)}
                                /><div className={`${data.finishedTodo} wrap-text`}>{data.todo}
                                </div>
                                <div className='btn-holder'>
                                    <input value={i}
                                        className='edit-todo' 
                                        type='image' 
                                        src='.\img\if_edit_172462.png'
                                        onClick={e => this.props.editTodos(e)} />
                                    <input value={i}
                                        className='delete-todo' 
                                        type='image' 
                                        src='.\img\if_close_32391.png'
                                        onClick={e => this.props.deleteTodos(e)} />
                                </div>
                            </li>)
                        )}
                        </ul>
                    </div>
            )}
            return (<div className='well w-100 todoListed'>Welcome to Very Simple Todo App!
                    <p>Get started now by adding a new todo on the left.</p>
                    </div>);
    }
}
export default TodoItems;
