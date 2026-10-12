
import React from 'react'
import './home.css'
import CV from '../../assets/cv.pdf'

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
              <span>➤</span>
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-orb">
            <div className="orb-shape orb-shape-one"></div>
            <div className="orb-shape orb-shape-two"></div>
            <div className="orb-shape orb-shape-three"></div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home
