import React from 'react';
import './App.css';

// React Router
import { 
  BrowserRouter as Router
} from 'react-router-dom'

// Components
import Header from './components/Header';
import Navigation from './components/Navigation';
import Categories from './components/Categories';
import Banner from './components/Banner';

function App() {
  return (
    <Router>
        <Header />
        <Categories />
        <Banner />
        <Navigation />
    </Router>
  );
}

export default App;
