import { useState, useEffect } from 'react';
import "./projects.scss";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add cursor glow
    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      cursor.remove();
    };
  }, []);

  useEffect(() => {
    fetch('https://api.github.com/users/noiceee/repos')
      .then(response => response.json())
      .then(data => {
        const sortedProjects = data
          .filter(repo => !repo.fork)
          .sort((a, b) => b.size - a.size);
        setProjects(sortedProjects.slice(0, 12));
        console.log(sortedProjects);
        setLoading(false);
      });
  }, []);

  const handleMouseMove = (e, cardElement) => {
    const rect = cardElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = (y - centerY) / 10;
    const tiltY = (centerX - x) / 10;

    // Update border gradient position
    const gradientX = (x / rect.width) * 100;
    const gradientY = (y / rect.height) * 100;
    
    cardElement.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`;
    cardElement.style.setProperty('--x', `${gradientX}%`);
    cardElement.style.setProperty('--y', `${gradientY}%`);
    cardElement.classList.add('card-hover');
  };

  const handleMouseLeave = (cardElement) => {
    cardElement.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    cardElement.classList.remove('card-hover');
  };

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              className="project-tile" 
              key={project.id}
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            >
              <div className="content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="stats">
                  <span>⭐ {project.stargazers_count}</span>
                  <span>🍴 {project.forks_count}</span>
                </div>
              </div>
              <div className="overlay">
                <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
        <a className="see-more" href={"https://github.com/noiceee"} target="_blank" rel="noopener noreferrer">
            See More
        </a>
    </div>
  );
} 