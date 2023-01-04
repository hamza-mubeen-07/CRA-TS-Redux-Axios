import React from 'react';
import './App.css';
import Router from './router/Router';

// Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom theme styles for boostrap
import './styles/custom-theme.scss';

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
