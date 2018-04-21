import React, { Component } from 'react';

class EditBox extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return (<div className='edit-box holding-cell w-100 rounded'>
                    <div className='well w-100 todoListed'>Description
                        <textarea name="edit" id="" cols="auto" rows="auto" defaultValue={this.props.text}></textarea>
                    </div>
                    <div className='well w-100 todoListed'>Priority
                        <div>
                        <select className='edit-todo-priority'>
                            <option value='0' disabled>Select a Priority</option>
                            <option value='1'>High Priority</option>
                            <option value='2'>Medium Priority</option>
                            <option value='3'>Low Priority</option>
                            <option value='4'>Not Really Sure</option>
                        </select>
                        <input type='image' className='save-btn' src='./img/check-plus.png' />

                        {/* <div className='save-btn-holder'>
                        </div> */}
                        </div>
                    </div>
                </div>)}
}
export default EditBox;