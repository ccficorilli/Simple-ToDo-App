import React, { Component } from 'react';
import TodoItems from './TodoItems';


class viewTodos extends Component {
    // displayTodos() {
        
    
    render() {
        return (
                <div className='col-sm-8 p-3'>
                    <div className='viewTodos bg-light w-100'>
                        <div className='panel mt-1 mb-1 p-2 pl-3 bg-custom txt-sm'>View To-Do's:</div>
                        <div className='holding-cell w-100 rounded'>
                        {   () => {
                            const value = this.props.value;
                            value.firstRun >= 1 
                            ? 
                            value.map(dataSet =>
                            <TodoItems
                            id={ dataSet.id }
                            priority={ dataSet.priority }
                            todo={ dataSet.todo }
                            />
                            console.log(dataSet))
                            :
                            <div className='well w-100 todoListed'>Welcome to Very Simple Todo App!
                                <p>Get started now by adding a new todo on the left.</p>
                            </div>
                            }
                        }
                        </div>
                    </div>
                </div>
        );
    } 
}   
export default viewTodos;