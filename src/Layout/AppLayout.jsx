import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import ScrollToTop from '../Components/ScrollToTop'

const AppLayout = () => {
  return (
    <div>
        <ScrollToTop/>import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Yeh component har baar page change hone par window ko top par scroll kar dega
const ScrollToTop = () => {
  // useLocation hook se current URL path milta hai
  const { pathname } = useLocation();

  useEffect(() => {
    // Jab bhi 'pathname' change hoga, yeh effect run hoga
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array mein 'pathname' hai

  return null; // Yeh component UI mein kuch bhi render nahi karta hai
};

export default ScrollToTop;

        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AppLayout