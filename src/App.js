import './App.css';
import { Route, Routes } from 'react-router-dom'
import React from "react";
import Header from './pages/partials/header';
import Footer from './pages/partials/footer';
import Home from './pages/home';

function App() {
  return (
     <div  className="App">
        <Header />
        
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
        <Footer />

      
      
    </div>
  );
}

export default App;
