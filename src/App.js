import React, { Component } from 'react';
import Tasks from './components/tasks.js';
import TaskAdd from './components/taskadd.js';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AppTitle: 'ToDo React - First build',
      AppDecription: 'React based application to manage todos across a few'+
                     'users. No real backend, just a simple dummy application.',
      AppTasks: [
        {id: uuid(), title:'task one',priority:0,category:'Proj. Management'},
        {id: uuid(), title:'task two',priority:2,category:'Team Building'},
        {id: uuid(), title:'task three',priority:3,category:'Development'},
        {id: uuid(), title:'task four',priority:0,category:'Proj. Management'},
        {id: uuid(), title:'task five',priority:3,category:'Development'}
      ]
    }
  }

  AppTaskAdd = (taskData) => {
    const tasks = this.state.AppTasks;
    const newTask = {
      ...taskData,
      id: uuid()
    }
    tasks.push(newTask);
    this.setState(function(prevState,props){
        return { AppTasks: tasks };
    }, () => console.log(this.state));
  }

  AppTaskRemove = (id) => {
    this.setState(function(prevState,props){
        return {
          ...prevState,
          AppTasks: prevState.AppTasks.filter(task => task.id !== id)
        };
    }, () => console.log(this.state.AppTasks));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.AppTitle}</h1>
        </header>
        <p className="App-intro">{this.state.AppDecription}</p>
        <TaskAdd addTask={this.AppTaskAdd}/>
        <Tasks items={this.state.AppTasks} removeTask={this.AppTaskRemove}/>
      </div>
    );
  }
}

export default App;
