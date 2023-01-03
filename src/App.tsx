import React from 'react';
import './App.css';

// Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom theme styles for boostrap
import './styles/custom-theme.scss';
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
