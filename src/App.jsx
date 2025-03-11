import RegisterForm from './components/RegisterForm';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Gestor de Tareas</h1>
      <div className="forms-wrapper">
        <RegisterForm />
        <TaskForm />
      </div>
    </div>
  );
}

export default App;