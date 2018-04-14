import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className='container'>
        <div className='header'>
          <h1>Very Simple To Do App</h1>
          <p className='title'>Track all of the things</p>


   {/* ---------------------------------------        */}
        </div>
        <div className='body-container'>
          <div className='addTodos'>
            <div className='unneeded-div'>
              <div className='todo-header'>Add New Todo</div>
              <div className='todo-textbox'>I want to...
              <br />
              <textarea />
              </div>
              <div className='todo-selectbox'>How much of a priority is this?
              <br />
              <select>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
              </select>
              <div className='todo-footer'>
              <button className='btn' type='submit'>Add</button>  
            </div>
            </div>
            </div>
          </div>
{/* ----------------------------------------           */}
          <div className='viewTodos'>
            <div className='unneeded-div'>hellos</div>


          </div>
        </div>



      </div>
    );
  }
}

export default App;
