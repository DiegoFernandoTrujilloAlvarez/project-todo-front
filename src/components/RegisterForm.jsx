import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firt_name: '',
    last_name: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false); // Nuevo estado
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Activar estado de carga
    try {
        console.log(formData);
      const response = await axios.post('https://project-todo-76ey.onrender.com/users/', formData);
      alert('Usuario registrado: ' + formData.email);
      navigate('/login');
    } catch (error) {
      alert('Error: ' + error.response.data.message);
    } finally {
      setIsLoading(false); // Desactivar carga sin importar el resultado
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h2>Registro de Usuario</h2>
      <input
        type="text"
        name="firt_name"
        placeholder="Nombre"
        value={formData.firt_name}
        onChange={handleChange}
        required
        disabled={isLoading}
      />
      <input
        type="text"
        name="last_name"
        placeholder="Apellido"
        value={formData.last_name}
        onChange={handleChange}
        required
        disabled={isLoading}
      />
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={handleChange}
        required
        disabled={isLoading}
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={formData.password}
        onChange={handleChange}
        required
        disabled={isLoading}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? (
          <div className="loading-indicator">
            <div className="spinner"></div>
            Registrando...
          </div>
        ) : 'Registrar'}
      </button>
    </form>
  );
};

export default RegisterForm;