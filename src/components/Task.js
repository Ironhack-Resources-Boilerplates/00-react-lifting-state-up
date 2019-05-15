import React from 'react';

class Task extends React.Component {
  state = {
    isDone: false
  }

  toggleTask () {
    this.setState( { isDone: !this.state.isDone } )
  }

  render() {
  return (
    <div className='task-card'>
    <div className='task-card-half'>
      <h1>{this.props.name}</h1>
      {
        this.state.isDone ?
        <h3 style={{color: 'green'}}>DONE ✅</h3>
        :
        <h3 style={{color: 'red'}}>PENDING</h3>
      }
    </div>

    <div className='task-card-half'>
      <h2><u> Task Description </u></h2>      
      <p>{this.props.description}</p>
      <button className='delete' onClick={ ()=> this.props.deleteTask(this.props.id) }>DELETE</button>
      <button className='add' onClick={ ()=> this.toggleTask() }>
      {
        this.state.isDone ?
        <span>UNDO ❌</span>
        :
        <span>✅</span>
      }
      </button>
    </div>
  </div>
  )}
}

export default Task;
