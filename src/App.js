import React, { useState } from 'react';
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
import Ads from './components/Ads'
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {    
      if (!showScroll && window.pageYOffset > 200){
        setShowScroll(true)    
      } else if (showScroll && window.pageYOffset <= 200){
        setShowScroll(false)    
      }  
  };
  window.addEventListener('scroll', checkScrollTop);

  return (
    <Router>
        <Header />
        <Categories />
        { showScroll && <BackToTop /> }
        <Banner />
        <Ads />
        <Navigation />
        <Footer />
    </Router>
  );
}

export default App;
