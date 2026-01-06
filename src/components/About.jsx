import React from "react";
import "./About.css";
import about from  '../assets/img/about.png';
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import rutaCV from '../assets/pdf/CV.pdf';

const About = () => {
  const {Theme} = useContext(ThemeContext)
  return (
    <div className={Theme === 'LightMode' ? 'about LightMode' : 'about DarkMode'} id="about">
      <div className="about_left">
        <img src={about} alt="about" className="about_img"></img>
      </div>

      <div className="about_right">
        <h2 className="about_title">About<span> Me</span></h2>
        <h3>Full Stack Developer</h3>
        <p>
          Systems and Informatics Engineer with 2+ years of experience building 
          scalable web applications. I specialize in delivering high-performance 
          solutions by combining clean code, database optimization, and 
          Agile methodologies to solve complex technical challenges.
        </p>
        <a href={rutaCV} target="_blank" rel="noopener noreferrer" className="btn">Read More</a>
      </div>
    </div>
  );
}

export default About;