import React from "react";
import "./Services.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Services = () => {
    const {Theme} = useContext(ThemeContext)
  return (
    <div className={Theme === 'LightMode' ? 'services LightMode' : 'services DarkMode'} id="services">
        <h2 className="title">My <span>Services</span></h2>

        <div className="services_content">
            <div className="services_box">
                <i className="fa-solid fa-database"></i>
                <h3>DB Admin</h3>
                <p>Management and optimization of relational and non-relational databases. I ensure data integrity, performance tuning, and secure storage solutions.</p>
                <div className="tech_icons">
                    <i className="devicon-oracle-original" title="Oracle"></i>
                    <i className="devicon-mysql-plain" title="MySQL"></i>
                    <i className="devicon-postgresql-plain" title="PostgreSQL"></i>
                    <i className="devicon-mongodb-plain" title="MongoDB"></i>
                </div>
            </div>
            <div className="services_box">
                <i className="fa-solid fa-code"></i>
                <h3>Backend Developer</h3>
                <p>Building robust and scalable server-side applications, designing efficient APIs, and integrating secure business logic.</p>
                <div className="tech_icons">
                    <i className="devicon-java-plain" title="Java"></i>
                    <i className="devicon-spring-plain" title="Spring Boot"></i>
                    <i className="devicon-dotnetcore-plain" title=".NET"></i>
                    <i className="devicon-csharp-plain" title="C#"></i>
                </div>
            </div>
            <div className="services_box">
                <i className="fa-solid fa-laptop-code"></i>
                <h3>Frontend Developer</h3>
                <p>Crafting responsive and interactive user interfaces with a focus on performance, using modern frameworks and clean code.</p>
                <div className="tech_icons">
                    <i className="devicon-angularjs-plain" title="Angular"></i>
                    <i className="devicon-react-original" title="React"></i>
                    <i className="devicon-javascript-plain" title="JavaScript"></i>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Services;