import { useContext, useState } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const TaskForm = () => {
  const { token } = useContext(AuthContext);
  const [taskData, setTaskData] = useState({
    description: '',
    date_to_do: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://project-todo-76ey.onrender.com/tasks/', taskData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Tarea creada: ' + taskData.description);
    } catch (error) {
      alert('Error: ' + error.response.data.message);
    }
  };

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro de Tareas</h2>
      <textarea
        name="description"
        placeholder="Descripción"
        value={taskData.description}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date_to_do"
        value={taskData.date_to_do}
        onChange={handleChange}
        required
      />
      <button type="submit">Crear Tarea</button>
    </form>
  );
};

export default TaskForm;