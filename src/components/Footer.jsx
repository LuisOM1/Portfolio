import React from "react";
import "./Footer.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-scroll";

const Footer = () => {
  const {Theme} = useContext(ThemeContext);
  const añoActual = new Date().getFullYear();
  return (
    <div className={Theme === 'LightMode' ? 'footer LightMode' : 'footer DarkMode'}>
      <div className="footer_copyright">
        <p>Copyright © {añoActual}. All rights reserved</p>
      </div>

      <div className="footer_icontop">
        <Link to="home"><i className="fa-solid fa-angles-up"></i></Link>
      </div>
    </div>
  );
}

export default Footer;