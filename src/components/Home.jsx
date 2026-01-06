import React from "react";
import "./Home.css";
import  home from  '../assets/img/home.png';
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import rutaCV from '../assets/pdf/CV.pdf';


const Home = () => {
const {Theme} = useContext(ThemeContext)
  return (
    <div className={Theme === 'LightMode' ? 'home LightMode' : 'home DarkMode'} id="home">
      <div className="home_content">
        <h3>Hello, I am</h3>
        <h1>Luis Obregon</h1>
        <p>Passionate about building scalable web applications and creating 
          intuitive user experiences through modern technologies.</p>
        
        <div className="social_media">
          <a href="https://wa.me/51941807478?text=Hola,%20estoy%20interesado%20en%20tus%20servicios" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
          <a href="https://www.linkedin.com/in/luisobre" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/LuisOM1" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://gitlab.com/LuamPeru" target="_blank" rel="noopener noreferrer"><i className="fab fa-gitlab"></i></a>
        </div>

        <a href={rutaCV} download="CV.pdf" className="btn">Download CV</a>
      </div>

      <div className="home_professions">
        <div className="professions_box">
          <div className="profession position_cero">
            <i className="fa-solid fa-database"></i> <h3>DB Admin</h3>
          </div>
          <div className="profession position_uno">
            <i className="fa-solid fa-code"></i> <h3>Backend Developer</h3>
          </div>
          <div className="profession position_dos">
            <i className="fa-solid fa-laptop-code"></i> <h3>Frontend Developer</h3>
          </div>
          <div className="profession position_tres">
            <i className="fa-solid fa-layer-group"></i> <h3>UI Designer</h3>
          </div>

          <div className="professions_circle"></div>
        </div>

        <div className="overlay"></div>

        <div className="home_img">
          <img src={home} alt="home"></img>
        </div>
      </div>

    </div>
  );
}

export default Home;