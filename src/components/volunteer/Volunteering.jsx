import "./Volunteering.css";

import gdgLogo from "../../assets/uj_logo.jpg";
import riotLogo from "../../assets/riot.png";
import smailLogo from "../../assets/Smail_logo.png";
import fakhrLogo from "../../assets/fakhr.jpg";

const volunteering = [
  {
    id: 1,
    organization: "GDG on Campus UJ",
    role: "Project Manager",
    period: "Jan 2025 — May 2026",
    logo: gdgLogo,
    description:
      "Managed and supported student-led technical initiatives while contributing to the developer community at the University of Jeddah.",
  },

  {
    id: 2,
    organization: "RIOT UJ",
    role: "Software Programmer",
    period: "Nov 2024 — Sep 2025",
    logo: riotLogo,
    description:
      "Contributed to building the club's website and supporting its digital presence through software development.",
  },

  {
    id: 3,
    organization: "SMAIL",
    role: "Web Programmer",
    period: "Nov 2025 — Present",
    logo: smailLogo,
    description:
      "Contributed to developing the organization's website and participated in project meetings and technical discussions.",
  },

  {
    id: 4,
    organization: "فريق فخر التطوعي",
    role: "Administration Assistant",
    period: "Nov 2024 — Dec 2025",
    logo: fakhrLogo,
    description:
      "Supported administrative activities and contributed to the team's day-to-day volunteer operations.",
  },
];

function Volunteering() {
  return (
    <section className="volunteering-section" id="volunteering">
      <div className="volunteering-container">

        {/* Heading */}
        <div className="volunteering-heading">
          <span className="section-label">
            VOLUNTEERING
          </span>

          <h2>
            Beyond the <span>classroom</span>
          </h2>

          <p>
            Communities and initiatives I've contributed to
            throughout my journey.
          </p>
        </div>


        {/* Timeline */}
        <div className="volunteering-timeline-wrapper">

          <div className="volunteering-timeline">

            <div className="timeline-line"></div>

            {volunteering.map((item) => (
              <article
                className="volunteer-item"
                key={item.id}
              >

                {/* Logo */}
                <div className="volunteer-logo">
                  <img
                    src={item.logo}
                    alt={`${item.organization} logo`}
                  />
                </div>


                {/* Timeline Dot */}
                <div className="volunteer-dot"></div>


                {/* Content */}
                <div className="volunteer-content">

                  <span className="volunteer-period">
                    {item.period}
                  </span>

                  <h3>
                    {item.organization}
                  </h3>

                  <h4>
                    {item.role}
                  </h4>

                  <p>
                    {item.description}
                  </p>

                  {item.previousRole && (
                    <span className="previous-role">
                      {item.previousRole}
                    </span>
                  )}

                </div>

              </article>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Volunteering;