import React, { Component } from 'react';

class AddTodos extends Component {

    render() {
        return (

            <div className='col-sm-4 p-3'>
                <div className='addTodos bg-light w-100'>
                <div className='panel mt-1 mb-1 p-2 bg-custom brd-btm-cst text-left txt-sm'>Add New To-Do:</div>
                <div className='txt-sm-b row m-1 pl-2 pr-2'>I want to...</div>
                <div className='row m-1 p-2 .textarea'>
                    <textarea className='create-todo-text'/>
                </div>
                <div className='txt-sm-b row m-1 pl-2 pr-2'>How much of a priority is it?</div>
                <div className='row m-1 p-2'>
                    <select className='create-todo-priority' defaultValue=''>
                        <option value='' disabled>Select a Priority</option>
                        <option value='1'>High Priority</option>
                        <option value='2'>Medium Priority</option>
                        <option value='3'>Low Priority</option>
                        <option value='4'>Not Really Sure</option>
                    </select>
                </div>  
                <div className='panel my-1 mx-auto p-2 brd-top-cst'>
                   <button type='submit' onClick={ this.addNewTodo }>Add To-Do</button>
                </div>
            </div>
        </div>
        )
    }
}
export default AddTodos;  