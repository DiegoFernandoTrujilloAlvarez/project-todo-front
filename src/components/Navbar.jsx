import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { FiUser, FiLogOut } from 'react-icons/fi'; // Íconos opcionales

const Navbar = () => {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-brand">
          <FiUser className="icon" /> Task Manager
        </Link>
        
        {token ? (
          <div className="nav-links">
            <button onClick={handleLogout} className="logout-btn">
              <FiLogOut className="icon" /> Cerrar sesión
            </button>
          </div>
        ) : (
          <div className="nav-links">
            <Link to="/login" className="nav-link">Ingresar</Link>
            <Link to="/register" className="nav-link">Registrarse</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;