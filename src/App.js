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
import Medmanagment from './pages/medication-managment';


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
          <Route path='/medication-managment' element={<Medmanagment/>} />
          <Route path='/medication-assisted-treatment' element={<Medassisted/>} />
        </Routes>
        <Footer />

      
      
    </div>
  );
}

export default App;
