import React, { Component } from 'react';
import TodoItems from './TodoItems';
import EditBox from './EditBox'

class ViewTodos extends Component {
    constructor(props) {        
        super(props)
    }
    
    render() {
        // let index;
        const editProgress = this.props.todos.filter(data => 
            data.isEditable[0] === true);
        // let i = this.props.todos.findIndex(editProgress)
        //  console.log({index})
         console.log({editProgress})
        if(editProgress[0] !== undefined){
           
            return ( <div className='col-sm-8 p-3'>
                        <div className='viewTodos bg-light w-100'>
                            <div className='panel mt-1 mb-1 p-2 pl-3 bg-custom txt-sm'>View To-Do's:</div>
                            <EditBox
                               text={editProgress.todo}
                               value={editProgress[1]}
                               priority={editProgress.priority}
                               todos={this.props.todos}
                            /> 
                            <TodoItems
                                todos={this.props.todos}
                                updateCheckbox={this.props.updateCheckbox}
                                deleteTodos={this.props.deleteTodos}
                                editTodos={this.props.editTodos}
                    />
                </div>
            </div>)
        } return (
            <div className='col-sm-8 p-3'>
                <div className='viewTodos bg-light w-100'>
                    <div className='panel mt-1 mb-1 p-2 pl-3 bg-custom txt-sm'>View To-Do's:</div>
                    <TodoItems
                        todos={this.props.todos}
                        updateCheckbox={this.props.updateCheckbox}
                        deleteTodos={this.props.deleteTodos}
                        editTodos={this.props.editTodos}
                    />
                </div>
            </div>
        );
    } 
}   
export default ViewTodos;