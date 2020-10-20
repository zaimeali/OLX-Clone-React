import React from 'react';
import './App.css';

// React Router
import { 
  BrowserRouter as Router
} from 'react-router-dom'

// Components
import Header from './components/Header';

function App() {
  return (
    <Router>
        <div>
          <Header />
        </div>
    </Router>
  );
}

export default App;
