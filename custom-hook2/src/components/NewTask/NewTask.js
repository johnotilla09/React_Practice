import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../hooks/use-http';

const NewTask = (props) => {
const { error, isLoading, sendRequest: sendRequestTask } = useHttp();

  const createTask = (taskText, taskData) => {
      const generatedId = taskData.name;
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    sendRequestTask({
      url: "https://react-html-db32f-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
      method: "POST",
      body: { text: taskText },
      header: { "Content-Type": "application/json" },
    }, createTask.bind(null, taskText));
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
