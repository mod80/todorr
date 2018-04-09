import React, { Component } from 'react';

class TaskList extends Component {

  constructor(props){
    super(props);
    this.handleRemoveTask = this.handleRemoveTask.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tasks: nextProps.tasks
    })
  }

  handleRemoveTask(e){
    this.props.removeTask(e.target.value);
    e.preventDefault();
  }


  render() {
    const tasklistitems = this.props.tasks.map( task =>
      <li className={"priority_" + task.priority} key={task.id}>
        {task.title}: {task.category} - {task.id} ::: 
        <button onClick={this.handleRemoveTask} value={task.id}>X</button>
      </li>
    );

    return (
      <ul>{tasklistitems}</ul>
    );
  }
}

export default TaskList;
