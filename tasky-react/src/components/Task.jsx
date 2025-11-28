import React from 'react';

const Task = (props) => {
  return (
    <div
      className="card"
      style={{ backgroundColor: props.done ? 'lightgrey' : '#5bb4c4' }}
    >
      <p className="title">{props.title}</p>
      <p>Due: {props.deadline}</p>
      <p className="description">{props.description}</p>
      <div
        className="priorityBadge"
        style={{
          backgroundColor:
            props.priority === 'High'
              ? 'red'
              : props.priority === 'Medium'
              ? '#d4a017'
              : 'green'
        }}
      >
        {props.priority}
      </div>
      <button onClick={props.markDone} className="doneButton">Done</button>
      <button className="deleteButton" onClick={props.deleteTask}>Delete</button>
    </div>
  );
}

export default Task;
