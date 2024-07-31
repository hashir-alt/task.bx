import React, { useState } from 'react';
import Header from './Header';
import TaskForm from './TaskForm';
import TaskDetails from './TaskDetails';

function App() {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [showSave, setShowSave] = useState(false);
  const [showDisplay, setShowDisplay] = useState(false);
  const [tasks, setTasks] = useState({ today: [], tomorrow: [] });

  const handleClear = () => {
    setTask('');
    setDescription('');
  };

  const handleSave = () => {
    if (task === '' || description === '') {
      alert('Please fill in both the task and description fields.');
      return;
    }

    const newTask = { task, description };
    const updatedTasks = {
      ...tasks,
      [showSave ? 'today' : 'tomorrow']: [
        ...tasks[showSave ? 'today' : 'tomorrow'],
        newTask
      ]
    };

    setTasks(updatedTasks);
    setShowDisplay(true);
  };

  return (
    <div style={styles.container}>
      <Header />
      {showDisplay ? (
        <TaskDetails
          tasks={tasks}
          setTasks={setTasks}
          onGoBack={() => setShowDisplay(false)}
        />
      ) : (
        <TaskForm
          task={task}
          description={description}
          setTask={setTask}
          setDescription={setDescription}
          showSave={showSave}
          setShowSave={setShowSave}
          onClear={handleClear}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
};

export default App;
