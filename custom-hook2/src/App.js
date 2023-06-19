import React, { useState, useEffect } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './components/hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();
  console.log("App.js");

  useEffect(() => {
    const transformTask = (taskObj) => {
      const loadedTasks = [];
  
      for (const taskKey in taskObj) {
        loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
      }
  
      setTasks(loadedTasks);
      console.log("transformTask");
    };

    fetchTasks({url: 'https://react-html-db32f-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json'}, transformTask);
    console.log("fetchTask");
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
