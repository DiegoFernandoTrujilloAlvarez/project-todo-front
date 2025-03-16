import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import TaskForm from './components/TaskForm';
import PublicRoute from './components/PublicRoute';
import Navbar from './components/Navbar';
import { useContext } from 'react';
import AuthContext from './context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { token } = useContext(AuthContext);
  return token ? children : <Navigate to="/login" />;
};

function App() {
  const { token } = useContext(AuthContext);

  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        {/* Ruta raíz: redirige según autenticación */}
        <Route path="/" element={
          token ? <Navigate to="/tasks" /> : <Navigate to="/login" />
        }/>

        {/* Rutas públicas solo para no autenticados */}
        <Route path="/login" element={
          <PublicRoute>
            <LoginForm />
          </PublicRoute>
        }/>
        
        <Route path="/register" element={
          <PublicRoute>
            <RegisterForm />
          </PublicRoute>
        }/>

        {/* Ruta protegida para autenticados */}
        <Route path="/tasks" element={
          <PrivateRoute>
            <TaskForm />
          </PrivateRoute>
        }/>

        {/* Catch-all para rutas no existentes */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;