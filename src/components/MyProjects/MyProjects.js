import React, { useState } from "react";
import "./MyProjects.css";
import projectData from "../../utils/projectData";

const MyProjects = () => {
  if (!projectData || Object.keys(projectData).length === 0) {
    return <p>No projects available</p>;
  }

  return (
    <div className="projects-container">
      {Object.entries(projectData).map(([category, projects]) => (
        <div key={category} className="category">
          <h2 className="category-title">{category}</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                {project.images && project.images.length > 0 && (
                  <ImageSlider images={project.images} />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = images[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <button className="slider-button left" onClick={prevSlide}>&lt;</button>
      <div className="slider-content">
        <img src={currentImage.url} alt={currentImage.description} className="slider-image" />
        <p className="slider-description">{currentImage.description}</p>
      </div>
      <button className="slider-button right" onClick={nextSlide}>&gt;</button>
      <div className="slider-bullets">
        {images.map((_, index) => (
          <span
            key={index}
            className={`bullet ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
      <div className="slider-buttons">
          {currentImage.codeLink && (
            <a href={currentImage.codeLink} target="_blank" rel="noopener noreferrer" className="slider-btn">
              Download Code
            </a>
          )}
          {currentImage.liveLink && (
            <a href={currentImage.liveLink} target="_blank" rel="noopener noreferrer" className="slider-btn">
              Go to Live Project
            </a>
          )}
        </div>
    </div>
  );
};

export default MyProjects;
