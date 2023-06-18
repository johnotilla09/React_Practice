import React, { useEffect } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './components/hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  const transformTask = (tasObj) => {
    const loadedTasks = [];

    for (const taskKey in tasObj) {
      loadedTasks.push({ id: taskKey, text: tasObj[taskKey].text });
    }

    setTasks(loadedTasks);
  };

  const { isLoading, error, sendRequest: fetchTasks } = useHttp({url: 'https://react-html-db32f-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json'}, transformTask);

  useEffect(() => {
    fetchTasks();
  }, []);

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
