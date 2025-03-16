import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PublicRoute = ({ children }) => {
  const { token } = useContext(AuthContext);
  
  // Si tiene token, redirige a tasks
  // Si no tiene token, muestra el componente público
  return token ? <Navigate to="/tasks" /> : children;
};

export default PublicRoute;