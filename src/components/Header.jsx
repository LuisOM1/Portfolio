import React, { useState } from "react";
import "./Header.css";
import { useContext } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  //Destructuramos para usar el tema oscuro
  const {Theme, handleTheme} = useContext(ThemeContext)

  //Cambiar el icono del menu mobile
  const [menu, setMenu] = useState(false);

  const handleClick = () => setMenu(!menu);
  const closeMobileMenu = () => setMenu(false);

  window.onscroll = () => {
     //Cambiar el color del header al hacer scroll hacia abajo
     let header = document.querySelector('.header');
     header.classList.toggle('sticky', window.scrollY > 100);
  }
  
  return (
    <header className={Theme === 'LightMode' ? 'header LightMode' : 'header DarkMode'}>
      <Link to="home" className="logo">Portfolio.</Link>

      <nav className={menu ? " active navbar" : "navbar"} >
        <Link to="home" onClick={closeMobileMenu}
        activeClass="active" spy={true} smooth={true} duration={100}>Home</Link>
        <Link to="about" onClick={closeMobileMenu}
        activeClass="active" spy={true} smooth={true} duration={100}>About</Link>
        <Link to="services" onClick={closeMobileMenu}
        activeClass="active" spy={true} smooth={true} duration={100}>Services</Link>
        <Link to="portfolio" onClick={closeMobileMenu}
        activeClass="active" spy={true} smooth={true} duration={100}>Portfolio</Link>
        <Link to="contact" onClick={closeMobileMenu}
        activeClass="active" spy={true} smooth={true} duration={100}>Contact</Link>
      </nav>

      <div className={Theme === 'LightMode' ? "fa-regular fa-moon mode_icon" : "fa-regular fa-sun mode_icon"} 
      onClick={handleTheme}></div>

      <div className={menu ? 'fas fa-times header_menu_icon' : 'fas fa-bars header_menu_icon'} onClick={handleClick}></div>

    </header>
  );
}

export default Header;