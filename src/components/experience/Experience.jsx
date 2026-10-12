import { useState } from "react";
import "./Experience.css";

import aquatLogo from "../../assets/Aquat-logo.png";

function Experience() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        {/* Section Heading */}
        <div className="experience-heading">
          <span className="section-label">EXPERIENCE</span>

          <h2>
            Where I've <span>worked</span>
          </h2>

          <p>
            Practical experience gained through hands-on training
            in a real IT environment.
          </p>
        </div>


        {/* Experience Card */}
        <div
          className={`experience-card ${
            showDetails ? "experience-card-expanded" : ""
          }`}
        >

          {/* Left Side */}
          <div className="experience-main">

            <div className="experience-top">
              <div className="company-logo">
                <img
                  src={aquatLogo}
                  alt="Aquat Food Industries"
                />
              </div>

              <div className="experience-date">
                2 Months
              </div>
            </div>

            <h3>IT Training</h3>

            <h4>Aquat Food Industries</h4>

            <p className="experience-description">
              Gained hands-on experience supporting IT operations
              in a real industrial environment, working with
              enterprise systems, user support, and business
              technologies.
            </p>

            {/* Details */}
            {showDetails && (
              <div className="experience-details">

                <div className="details-group">
                  <h5>What I worked with</h5>

                  <ul>
                    <li>
                      Windows and domain environments
                    </li>

                    <li>
                      Microsoft 365 and Azure AD
                    </li>

                    <li>
                      VPN and MFA configuration
                    </li>

                    <li>
                      SAP and SharePoint
                    </li>

                    <li>
                      Power BI device dashboard
                    </li>

                    <li>
                      Internal IT ticketing systems
                    </li>
                  </ul>
                </div>

                <div className="details-group">
                  <h5>Environment</h5>

                  <p>
                    Worked alongside the IT team in an
                    industrial environment, gaining practical
                    exposure to enterprise technologies,
                    technical support, and day-to-day IT operations.
                  </p>
                </div>

              </div>
            )}

            <button
              className="experience-link"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "View Less ↑" : "View Details →"}
            </button>

          </div>


          {/* Right Side */}
          <div className="experience-skills">

            <span className="experience-label">
              EXPERIENCE WITH
            </span>

            <div className="experience-tags">

              <span>Microsoft 365</span>
              <span>Azure AD</span>
              <span>Windows</span>
              <span>SAP</span>
              <span>Power BI</span>
              <span>SharePoint</span>
              <span>VPN & MFA</span>
              <span>IT Support</span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;