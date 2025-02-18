import { useEffect, useRef } from 'react';
import "./about.scss";
import { FaCode, FaReact, FaServer, FaTools } from 'react-icons/fa';

export default function About() {
  const aboutRef = useRef(null);
  const skills = [
    {
      title: "Languages",
      icon: <FaCode />,
      skills: "JavaScript (ES6), HTML5/CSS3, C++, Java, Python, SQL",
      color: "#61DAFB"
    },
    {
      title: "Frontend",
      icon: <FaReact />,
      skills: "React.js, Angular, Lit, Sass/Scss, Webpack5",
      color: "#00D8FF"
    },
    {
      title: "Backend",
      icon: <FaServer />,
      skills: "Node.js, REST, MongoDB, Solidity",
      color: "#68A063"
    },
    {
      title: "Tools & Others",
      icon: <FaTools />,
      skills: "Git, Vitest, Playwright, Postman, AWS S3",
      color: "#F1502F"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e, cardElement) => {
    const rect = cardElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = (y - centerY) / 15;
    const tiltY = (centerX - x) / 15;

    // Update border gradient position
    const gradientX = (x / rect.width) * 100;
    const gradientY = (y / rect.height) * 100;
    
    cardElement.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
    cardElement.style.setProperty('--x', `${gradientX}%`);
    cardElement.style.setProperty('--y', `${gradientY}%`);
    cardElement.classList.add('card-hover');
  };

  const handleMouseLeave = (cardElement) => {
    cardElement.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    cardElement.classList.remove('card-hover');
  };

  return (
    <div className="about-container" id="about" ref={aboutRef}>
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a Software Engineer with a year of professional experience, including a key role at TraceLink where I 
            contributed to developing a metadata-driven platform and supply chain integration solutions. My journey includes 
            valuable internship experiences at TraceLink and Niyo (Fintech), where I worked on enterprise-grade applications 
            and improved development workflows.
          </p>
          <p>
            With a strong foundation in data structures and algorithms, I specialize in full-stack development using 
            modern technologies. I'm passionate about creating efficient, scalable solutions and am currently seeking new 
            opportunities to contribute my expertise in JavaScript, Java, React.js, Angular, and Node.js to innovative 
            projects. Available for immediate start.
          </p>
          <div className="skills">
            <h3>Technical Skills</h3>
            <div className="skill-categories">
              {skills.map((skill, index) => (
                <div 
                  className="skill-category"
                  key={index}
                  onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                  onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                >
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <h4>{skill.title}</h4>
                  <p>{skill.skills}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 