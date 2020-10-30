import React from 'react';
import './App.css';

// React Router
import { 
  BrowserRouter as Router
} from 'react-router-dom'

// Components
import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
        <Header />
        <Navigation />
    </Router>
  );
}

export default App;
