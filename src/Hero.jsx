import React from 'react';
import heroImg from './assets/hero-image.svg';
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Welcome to Rachi's C.M.S</h1>
          <p>
            I'm a recent graduate in Computer Sciences and Mathematics. I am
            very passionate about creating web apps, I am more focused on front
            end web development. Below are my projects to show case my skills
            which are HTML, CSS, Javascript, React js and Node
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="hero image" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
