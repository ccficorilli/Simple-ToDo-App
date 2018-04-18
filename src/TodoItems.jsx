import React from 'react';

export default ((props) => {
  if (props.quantity === 0){
     return (<div className='well w-100 todoListed'>Welcome to Very Simple Todo App!
           <p>Get started now by adding a new todo on the left.</p>{console.log(props)}
        </div>)}
    const wtf = props.todos.map(data => (
      <div key={data.entry} className={ `well w-100 todoListed ${data.priority}` }>
        <input type='checkbox' key={data.entry} value={data.checked} />{data.todo}
      </div>));
  return wtf ;
});
