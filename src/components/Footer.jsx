import React from 'react'
import './styles/Footer.css'

const Footer = () => {
  return (
    <footer>
    <div class="footer-text flex content-center items-center gap-7 w-screen">
        <a href="">POLITICAS DE SEGURIDAD</a>
        <a href="">TERMINOS Y CONDICIONES</a>
        <a href="">CONTACTO</a>
        <div class="footer-img flex items-center gap-3">
            <a href="https://www.instagram.com">
                <img src="https://logotipoz.com/wp-content/uploads/2021/10/instagram-2-1.svg" alt="Instagram Logo"/>
            </a>
            <a href="https://www.twitter.com">
                <img src="https://cdn-icons-png.flaticon.com/512/3938/3938028.png" alt="Twitter Logo"/>
            </a>
            <a href="https://www.facebook.com">
                <img src="https://www.freepnglogos.com/uploads/facebook-logo-13.png" alt="Facebook Logo"/>
            </a>
        </div>
    </div>
    </footer>
)
}

export default Footer