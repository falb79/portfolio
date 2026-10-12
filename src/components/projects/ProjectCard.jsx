import { useState } from "react";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article
      className={`project-card ${
        showDetails ? "project-card-expanded" : ""
      }`}
    >
      <div className="project-image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
      </div>

      <div className="project-content">

        <div className="project-categories">
          {project.categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>

        <h3>{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        {showDetails && (
          <div className="project-details">

            <div>
              <h4>Overview</h4>
              <p>{project.details}</p>
            </div>

            <div>
              <h4>Technologies</h4>

              <div className="technology-list">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            
         
            <div className="project-links">
              {project.links.map((link) => (
                <a
                  key={link.type}
                  href={link.url}
                  className={`project-btn ${link.type}-btn`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>


          </div>
        )}

        <button
          className="details-btn"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "View Less ↑" : "View Details →"}
        </button>

      </div>
    </article>
  );
}

export default ProjectCard;