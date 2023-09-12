import React from 'react'
import './styles/Header.css'

const Header = () => {
  return (
    <div class="nav flex content-between items-center">
    <input type="checkbox" id="nav-check" />
    <div class="nav-header">
      <div class="nav-title">
        <img src="./assets/img/itbalogo-removebg-preview.png" alt="Bank Logo" />
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
      <a href="" target="">Inicio</a>
      <a href="#" target="">Cuenta</a>
      <a href="" target="">Transferencias</a>
      <a href="" target="">Pagos</a>
      <a href="" target="">Ayuda</a> 
      <a href="./login.html" target="">Iniciar Sesión</a>
    </div>
  </div>
  )
}

export default Header