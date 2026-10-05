import { useState } from "react";
import "./Projects.css";

import ProjectCard from "./ProjectCard";

import fakeRevealImage from "../../assets/logo.svg";
import UJRide from "../../assets/UJRide.png";

const projects = [
  {
    id: 1,
    title: "Fake Reveal",
    categories: ["Web", "Data & AI", "Systems"],
    description:
      "A multimodal deepfake detection system designed to identify inconsistencies between audio and visual content.",
    details:
      "Fake Reveal analyzes speech videos using audio and visual features to detect manipulated content. The project combines multiple processing and machine learning components into an accessible web application.",
    technologies: ["Python", "Flask", "MediaPipe", "Machine Learning"],
    image: fakeRevealImage,
    github: "#",
    demo: "#",
  },

  {
    id: 2,
    title: "UJRide Application Design",
    categories: ["UI/UX"],
    description:
      "A ride-sharing application designed to facilitate convenient and efficient transportation for university students.",
    details:
      "The application allows students to request rides, match with drivers, and manage their transportation efficiently within the university community.",
    technologies: ["Figma", "UI/UX Design", "Prototyping"],
    image: UJRide,
    github: "#",
    demo: "https://canva.link/y4rtw98g64w2stl",
  },

  {
    id: 3,
    title: "Arabic Reviews Analysis",
    categories: ["Data & AI"],
    description:
      "An NLP project focused on analyzing Arabic customer reviews and extracting useful insights.",
    details:
      "The project explores natural language processing techniques for Arabic review data, including preprocessing, analysis, and classification.",
    technologies: ["Python", "NLP", "Data Analysis"],
    image: fakeRevealImage,
    github: "#",
    demo: "#",
  },
];

const categories = ["All", "Web", "UI/UX", "Data & AI", "Systems"];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeCategory)
        );

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <div>
            <span className="section-label">MY WORK</span>

            <h2>
              Selected <span>Projects</span>
            </h2>
          </div>

          <p>
            A collection of projects I've built across web development,
            design, systems, and data.
          </p>
        </div>

        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;