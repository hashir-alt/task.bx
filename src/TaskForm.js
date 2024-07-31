import React from 'react';
import './TaskForm.css';

function TaskForm({
  task,
  description,
  setTask,
  setDescription,
  showSave,
  setShowSave,
  onClear,
  onSave,
}) {
  return (
    <div className="form-container">
      <h1>Task Form</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Task"
        className="input"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="input"
      />
      <div className="toggle-container">
        <label>
          <input
            type="checkbox"
            checked={showSave}
            onChange={() => setShowSave(!showSave)}
            className="toggle"
          />
          <span>Save to Today</span>
        </label>
      </div>
      <div className="button-container">
        <button onClick={onClear} className="button">Clear</button>
        <button onClick={onSave} className="button">Save</button>
      </div>
    </div>
  );
}

export default TaskForm;
