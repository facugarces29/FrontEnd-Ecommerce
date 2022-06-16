import React, {useState} from 'react';
import {navButton} from './components/nav-button'
import './App.css';

function App() {

  const clickManagement = () =>{
    
  }

  var isLogged = false;

  var buttonText;

  isLogged ? buttonText='my account' : buttonText='login'

  return (
    <div classNameName='app'>
      <nav className='navbar'>
        <a className='navbar-brand' href='home'>E-commerce</a>
        <a className='navbar-order' href='order'>orders</a> 
        <form className='search-form'>
          <input className='search-form-control' type='search' placeholder='Search' aria-label='Search' />
          <button className='search-form-submit' type='submit'>Search</button>
        </form>
        <navButton 
        buttonText
        isLogged


        ></navButton>
      </nav>




    </div>
    
  );
}

export default App;
