import { useContext, useState } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const TaskForm = () => {
  const { token } = useContext(AuthContext);
  const [taskData, setTaskData] = useState({
    description: '',
    date_to_do: '',
  });
  const [isLoading, setIsLoading] = useState(false); // Nuevo estado

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Activar estado de carga
    try {
      const response = await axios.post('https://project-todo-76ey.onrender.com/tasks/', taskData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Tarea creada: ' + taskData.description);
      setTaskData({
        description: '',
        date_to_do: '',
      });
    } catch (error) {
      alert('Error: ' + error.response.data.message);
    } finally {
      setIsLoading(false); // Desactivar carga sin importar el resultado
    }
  };

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2>Registro de Tareas</h2>
      <textarea
        name="description"
        placeholder="Descripción"
        value={taskData.description}
        onChange={handleChange}
        required
        disabled={isLoading}
      />
      <input
        type="date"
        name="date_to_do"
        value={taskData.date_to_do}
        onChange={handleChange}
        required
        disabled={isLoading}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? (
          <div className="loading-indicator">
            <div className="spinner"></div>
            Creando tarea...
          </div>
        ) : 'Crear tarea'}
      </button>
    </form>
  );
};

export default TaskForm;