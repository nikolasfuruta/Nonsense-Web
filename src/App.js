import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Beneficios from './components/Beneficios';
import About from './components/About';
import Portfolio from './components/portfolio/Portfolio';
import Contato from './components/Contato';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header/>
      <Home/>
      <Beneficios/>
      <About/>
      <Portfolio/>
      <Contato/>
      <Footer/>
    </>
  )
}

export default App