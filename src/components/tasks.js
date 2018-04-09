import React, { Component } from 'react';
import TaskList from './tasklist';
class Tasks extends Component {

  constructor(props){
    super(props);
    this.state = {
      taskcount: props.items.length,
      tasks: props.items
    };
    this.handleRemoveTask = this.handleRemoveTask.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      taskcount: nextProps.items.length,
      tasks: nextProps.items
    });
  }

  handleRemoveTask(id){
    this.props.removeTask(id);
  }


  render() {
    return (
      <div className="Tasks">
        <h3>Tasks ({this.state.taskcount})</h3>
        <TaskList tasks={this.state.tasks}
          removeTask={this.handleRemoveTask} />
      </div>
    );
  }
}

export default Tasks;
