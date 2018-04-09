import React, { Component } from 'react';

class TaskAdd extends Component {

  constructor(props){
    super(props);
    this.state = {
      priorities: [0,1,2,3,4],
      categories: ["Project Management", "Team Building", "Development"]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    const priority = e.target.priority.value;
    const category = e.target.category.value;
    const title = e.target.title.value;
    e.preventDefault();
    if( !priority || !category || !title ){
      alert("All task data required!");
    } else {
      this.props.addTask({
        priority: priority,
        category: category,
        title: title
      });
    }
  }



  render() {
    const priorityOptions = this.state.priorities.map(option =>
      <option key={option} value={option}>{option}</option>
    );
    const categoryOptions = this.state.categories.map(category =>
      <option key={category} value={category}>{category}</option>
    );

    return (
      <div className="TaskAdd">
        <h3>Add a task</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Priority</label>
          <select name="priority">{priorityOptions}</select><br />
          <label>Category</label>
          <select name="category">{categoryOptions}</select><br />
          <label>Title</label>
          <input name="title" type="text"></input><br />
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default TaskAdd;
