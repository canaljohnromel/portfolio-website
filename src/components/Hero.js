import React from "react";
import "./Hero.css";
import profilePic from "../assets/profile.jpeg"; // ✅ import your image

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Hello, I'm <span>John Romel Cañal</span> 👋
          </h1>
          <p>
            A 4th-year IT student passionate about web development & design.
          </p>
          <a href="#projects" className="hero-btn">
            View My Work
          </a>
        </div>

        <div className="hero-image">
          <img src={profilePic} alt="John Romel Cañal" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
