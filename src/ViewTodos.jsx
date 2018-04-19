import React, { Component } from 'react';
import TodoItems from './TodoItems';


class viewTodos extends Component {
    constructor(props) {        
        super(props)
    
    }
    render() {
        return (
            <div className='col-sm-8 p-3'>
                <div className='viewTodos bg-light w-100'>
                    <div className='panel mt-1 mb-1 p-2 pl-3 bg-custom txt-sm'>View To-Do's:</div>
                    <TodoItems
                        todos={this.props.todos}
                        updateCheckbox={this.props.updateCheckbox}
                    />
                </div>
            </div>
        );
    } 
}   
export default viewTodos;