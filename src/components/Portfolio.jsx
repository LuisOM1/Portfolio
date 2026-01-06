import React from 'react';
import './Portfolio.css';
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import  project1 from  '../assets/img/portfolio1.jpg';
import  project2 from  '../assets/img/skiesWebsite.png';

const Portfolio = () => {
  const {Theme} = useContext(ThemeContext)

  const projectsData = [
    {
      id: 1,
      title: "Corporate Website",
      description: "Corporate web application providing detailed information about electronic invoicing services and solutions.",
      image: project2,
      technologies: [ { icon: "fab fa-react" }, { icon: "fab fa-css3-alt" }, { icon: "fab fa-js" }],
      demo: "https://luisom1.github.io/web-front/",
      github: "#"
    },
    {
      id: 2,
      title: "Attendance Control System",
      description: "Web application designed for employees to log work hours and manage attendance records efficiently.",
      image: project1,
      technologies: [ { icon: "fab fa-react" }, { icon: "fab fa-java" }, { icon: "devicon-spring-plain" }, {icon: "devicon-oracle-original" } ],
      demo: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Central Filing System",
      description: "Internal central archive system developed for Sunarp's national records management.",
      image: project1,
      technologies: [ {icon: "fab fa-angular" }, { icon: "fab fa-java" }, { icon: "devicon-spring-plain" }, {icon: "devicon-oracle-original" }],
      demo: "#",
      github: "#"
    }
    // Puedes agregar los otros 3 aquí...
  ];

  return (
    <div className={Theme === 'LightMode' ? 'portfolio LightMode' : 'portfolio DarkMode'} id="portfolio">
      <h2 className="portfolio_title">Latest <span>Projects</span></h2>
      
      <div className="projects_grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project_card">
            <div className="project_img">
              <img src={project.image} alt={project.title} />
            </div>
            
            <div className="project_info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project_tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech_badge">
                    <i className={tech.icon}></i> {}
                  </span>
                ))}
              </div>
              
              <div className="project_btns">
                <a href={project.demo} className="btn_site">Visit Site</a>
                <a href={project.github} className="btn_outline">Github</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;