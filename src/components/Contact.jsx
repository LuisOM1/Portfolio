import React from "react";
import "./Contact.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Contact = () => {
  const {Theme} = useContext(ThemeContext)
  return (
    <div className={Theme === 'LightMode' ? 'contact LightMode' : 'contact DarkMode'} id="contact">
      <h2 className="contact_title">Contact<span> Me!</span></h2>

      <form action="#" className="contact_form">
          <div className="input_box">
              <input type="text" placeholder="Full Name"></input>
              <input type="email" placeholder="Email Address"></input>
          </div>
          <div className="input_box">
              <input type="number" placeholder="Mobile Number"></input>
              <input type="text" placeholder="Email Subject"></input>
          </div>
          <textarea name="" id="" cols={30} rows={10} placeholder="Your Message"></textarea>
          <div type="submit" className="btn btnCien">Send Message</div>
      </form>            
    </div>
  );
}

export default Contact;