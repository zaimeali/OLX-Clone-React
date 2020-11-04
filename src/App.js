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
import Login from './components/Login';

function App() {

  const [showScroll, setShowScroll] = useState(false);

  const [loginBox, setLoginBox] = useState(true);

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
        <Header isLogin={ loginBox } setLogin={ setLoginBox } />
        { loginBox && <Login setLogin={ setLoginBox } /> }
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
