import React from 'react'
import logo from './img/itbalogo-removebg-preview.png'
import './styles/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div class="nav flex justify-between items-center">
    <input type="checkbox" id="nav-check" />
    <div class="nav-header">
      <div class="nav-title">
        <img src={logo} alt="Bank Logo" />
      </div>
    </div>
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    
    <div class="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/cuenta">Cuenta</Link>
        <Link to="/transferencia">Transferencias</Link>
        <Link to="/faq">Ayuda</Link>
        <Link to="/login">Cerrar Sesion</Link>
    </div>
  </div>
  )
}

export default Header