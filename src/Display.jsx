import React from 'react';

export default props => 
    (<ul className= 'well w-100 todoListed'>
        <li className={props.priority}
            key={props.key}>
            <input type='checkbox' 
                    value={props.complete} 
            />{props.todo}
        </li>
    </ul>)