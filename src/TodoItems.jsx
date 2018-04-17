import React, { Component } from 'react';

class TodoItems extends Component {
    constructor(props){
        super(props);
    }

    render(){
        // console.log(props);
        
        if(this.props.todos.length > 0) {
            return <div className='holding-cell w-100 rounded'>
               {this.props.todos.map( data => 
               (<ul key={data.entry}
                    className={ `well w-100 todoListed ${data.priority}` }>
                    <input type='checkbox' 
                           key={data.entry} 
                           value={data.checked} 
                    />
                    <li>{data.todo}</li>
                </ul>)
                    )
            // console.log(typeof buildTheList)                
            }</div>
        }
            return (<div className='well w-100 todoListed'>Welcome to Very Simple Todo App!
                    <p>Get started now by adding a new todo on the left.</p>
                    </div>);
    }
}
export default TodoItems;