import { useState } from 'react';
import axios from 'axios';

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    user_id: '',
    description: '',
    created_on: '',
    date_to_do: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://project-todo-76ey.onrender.com/tasks/', taskData);
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
      <input
        type="number"
        name="user_id"
        placeholder="ID usuario"
        value={taskData.user_id}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Descripción"
        value={taskData.description}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="created_on"
        value={taskData.created_on}
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