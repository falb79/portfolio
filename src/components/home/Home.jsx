import React from 'react'
import './home.css'
import CV from '../../assets/cv.pdf'
import logo from '../../assets/logo.svg'

function Home() {
return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-text">
          <p className="hero-intro">Hi, I'm</p>

          <h1>
            Fatima <span>Lajam</span>
          </h1>

          <h2>Computer Science Graduate</h2>

          <p className="hero-description">
            I build practical digital solutions with a focus on
            clean design, functionality, and meaningful user experiences.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="hero-btn primary-btn">
              Contact Me
              <span>→</span>
            </a>

          <a
            href={CV}
            className="hero-btn secondary-btn"
            download
          >
            Download CV
            <span>↓</span>
          </a>
          </div>
        </div>

        <div className="hero-visual">

          <div className="visual-circle"></div>

          <div className="profile-card">

            <div className="profile-top">
              <span className="status-dot"></span>
              <span>Available for opportunities</span>
            </div>

            <div className="logo-container">
              <img src={logo} alt="Fatima Lajam" />
            </div>

            <h3>Fatima Lajam</h3>
            <p>Computer Science</p>

            <div className="profile-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>Backend</span>
            </div>

          </div>

          <div className="floating-card card-one">
            <strong>03+</strong>
            <span>Featured Projects</span>
          </div>

          <div className="floating-card card-two">
            <strong>CS</strong>
            <span>Graduate</span>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Home