import { useState } from "react";
import "./Projects.css";

import ProjectCard from "./ProjectCard";

import fakeRevealImage from "../../assets/Fakereveal.png";
import UJRide from "../../assets/UJRide.png";
import Thabbet from "../../assets/Thabbet.png";
import Waves from "../../assets/Wavess.png";
import UJEvents from "../../assets/UJEvents.png";

const projects = [
  {
    id: 1,
    title: "Fake Reveal",
    categories: ["Web", "Data Analysis & AI", "Systems"],
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
    categories: ["Data Analysis & AI"],
    description:
      "An NLP project focused on analyzing Arabic customer reviews and extracting useful insights.",
    details:
      "The project explores natural language processing techniques for Arabic review data, including preprocessing, analysis, and classification.",
    technologies: ["Python", "NLP", "Data Analysis"],
    image: fakeRevealImage,
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Waves Website",
    categories: ["Web", "UI/UX","Database"],
    description:
      "A modern website for cruise reservation management.",
    details:
      "This project is a web application aimed at providing an engaging and user-friendly platform for customers to explore and book cruise services.",
    technologies: ["JavaScript", "Node.js", "mySQL"],
    image: Waves,
    github: "https://github.com/falb79/WavesWebsite",
    demo: "https://canva.link/l7pwhsxqwx01qrp",
  },
    {
    id: 5,
    title: "Thabbet App design",
    categories: ["UI/UX"],
    description:
      "An app designed for Quran revision",
    details:
      "Thabbet app was designed to help users revise the Quran in a structured and efficient manner, providing features for tracking progress and setting revision goals.",
    technologies: ["Figma", "UI/UX", "Gamification"],
    image: Thabbet,
    github: "#",
    demo: "#",
  },
      {
    id: 6,
    title: "UJEvents Desktop Application",
    categories: ["Database", "UI/UX"],
    description:
      "A desktop application designed to manage and organize events within a university setting.",
    details:
      "The UJEvents application provides a platform for students and staff to create, manage, and participate in various events, enhancing campus engagement and community building.",
    technologies: ["Figma", "UI/UX", "Gamification"],
    image: UJEvents,
    github: "https://github.com/LUJxAIN/oop2_project",
    demo: "https://canva.link/agvqner31aub3ui",
  },
];

const categories = ["All", "Web", "UI/UX", "Data Analysis & AI", "Database"];

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