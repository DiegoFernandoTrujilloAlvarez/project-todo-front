import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // Nuevo estado

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Activar estado de carga
    try {
      const response = await axios.post('https://project-todo-76ey.onrender.com/oauth/token', credentials);
      login(response.data.token);
      navigate('/tasks');
    } catch (error) {
      alert('Error al iniciar sesión');
    } finally {
      setIsLoading(false); // Desactivar carga sin importar el resultado
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Iniciar Sesión</h2>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={credentials.email}
        onChange={(e) => setCredentials({...credentials, email: e.target.value})}
        required
        disabled={isLoading}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={credentials.password}
        onChange={(e) => setCredentials({...credentials, password: e.target.value})}
        required
        disabled={isLoading}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? (
          <div className="loading-indicator">
            <div className="spinner"></div>
            Iniciando sesión...
          </div>
        ) : 'Ingresar'}
      </button>
    </form>
  );
};

export default LoginForm;