import './App.css';
import { Route, Routes } from 'react-router-dom'
import React from "react";
import Header from './pages/partials/header';
import Footer from './pages/partials/footer';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Residential from './pages/residential';
import Outmental from './pages/outpatient-mental';
import Outsubstance from './pages/outpatient-substance';
import Prp from './pages/prp';
import Medassisted from './pages/medication-assisted';
import Medmanagement from './pages/medication-management';
import Services from './pages/services';
import Domestic from './pages/domestic';
import Anger from './pages/anger';



function App() {
  return (
     <div  className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/residential-substance-abuse-treatment' element={<Residential/>} />
          <Route path='/mental-health-therapy' element={<Outmental/>} />
          <Route path='/substance-abuse-counseling/' element={<Outsubstance/>} />
          <Route path='/psychiatric-rehabilitation-program' element={<Prp/>} />
          <Route path='/medication-management' element={<Medmanagement/>} />
          <Route path='/medication-assisted-treatment' element={<Medassisted/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/domestic-violence' element={<Domestic/>} />
          <Route path='/anger-management' element={<Anger/>} />
        </Routes>
        <Footer />      
    </div>
  );
}

export default App;
