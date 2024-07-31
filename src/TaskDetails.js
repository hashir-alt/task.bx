import React, { useState } from 'react';
import './TaskDetails.css'; // Import the CSS file

function TaskDetails({ tasks, setTasks, onGoBack }) {
  const [selectedTasks, setSelectedTasks] = useState([]);

  const handleCheckboxChange = (task) => {
    setSelectedTasks((prevSelectedTasks) =>
      prevSelectedTasks.includes(task)
        ? prevSelectedTasks.filter(t => t !== task)
        : [...prevSelectedTasks, task]
    );
  };

  const handleDelete = () => {
    const updatedTasks = {
      today: tasks.today.filter(task => !selectedTasks.includes(task)),
      tomorrow: tasks.tomorrow.filter(task => !selectedTasks.includes(task)),
    };
    setTasks(updatedTasks);
    setSelectedTasks([]);
  };

  const handleSelectAll = (day) => {
    setSelectedTasks((prevSelectedTasks) => [
      ...prevSelectedTasks,
      ...tasks[day].filter(task => !prevSelectedTasks.includes(task))
    ]);
  };

  const handleDeselectAll = (day) => {
    setSelectedTasks((prevSelectedTasks) =>
      prevSelectedTasks.filter(task => !tasks[day].includes(task))
    );
  };

  const handleDeleteAll = (day) => {
    const updatedTasks = {
      ...tasks,
      [day]: []
    };
    setTasks(updatedTasks);
    setSelectedTasks((prevSelectedTasks) =>
      prevSelectedTasks.filter(task => !tasks[day].includes(task))
    );
  };

  return (
    <div className="details-container">
      <h1>Task Details</h1>
      <div className="section">
        <h2>Today</h2>
        <div className="button-group">
          <button onClick={() => handleSelectAll('today')} className="button">Select All</button>
          <button onClick={() => handleDeselectAll('today')} className="button">Deselect All</button>
          <button onClick={() => handleDeleteAll('today')} className="button">Delete All</button>
        </div>
        {tasks.today.length === 0 ? (
          <p>No tasks for today.</p>
        ) : (
          tasks.today.map((task, index) => (
            <div key={index} className="task">
              <input
                type="checkbox"
                checked={selectedTasks.includes(task)}
                onChange={() => handleCheckboxChange(task)}
                className="checkbox"
              />
              <div>
                <p><strong>Task:</strong> {task.task}</p>
                <p><strong>Description:</strong> {task.description}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="section">
        <h2>Tomorrow</h2>
        <div className="button-group">
          <button onClick={() => handleSelectAll('tomorrow')} className="button">Select All</button>
          <button onClick={() => handleDeselectAll('tomorrow')} className="button">Deselect All</button>
          <button onClick={() => handleDeleteAll('tomorrow')} className="button">Delete All</button>
        </div>
        {tasks.tomorrow.length === 0 ? (
          <p>No tasks for tomorrow.</p>
        ) : (
          tasks.tomorrow.map((task, index) => (
            <div key={index} className="task">
              <input
                type="checkbox"
                checked={selectedTasks.includes(task)}
                onChange={() => handleCheckboxChange(task)}
                className="checkbox"
              />
              <div>
                <p><strong>Task:</strong> {task.task}</p>
                <p><strong>Description:</strong> {task.description}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <button onClick={onGoBack} className="button">Go Back</button>
    </div>
  );
}

export default TaskDetails;
