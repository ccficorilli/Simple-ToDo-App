import React, { Component } from 'react';

class TodoItems extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        if(this.props.todos.length > 0) {
            return <div className='holding-cell w-100 rounded'>
                        <ul className= 'well w-100 todoListed'>        
                        {this.props.todos.map( (data, i) => 
                            (<li className={`success bg${data.priority} bucket w-100 `} 
                               key={data.entry}>                               
                                <input type='checkbox' 
                                       key={i}
                                       value={i}
                                       onChange={e => this.props.updateCheckbox(e)}
                                />
                                <span className={data.done}>{data.todo}</span>
                                <div className='btn-holder'>Buttons Go Here</div>
                            </li>)
                        )}
                        </ul>
                    </div>
            }
            return (<div className='well w-100 todoListed'>Welcome to Very Simple Todo App!
                    <p>Get started now by adding a new todo on the left.</p>
                    </div>);
    }
}
export default TodoItems;
