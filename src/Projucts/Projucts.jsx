import React from 'react'
import classes from "./projucts.module.css";
import { OpenInNew, GitHub } from '@mui/icons-material';

function Projucts() {
  const projects = [
    {
      title: "Amazon E-commerce Website",
      description: "A full-featured e-commerce platform with product listings, shopping cart, and checkout functionality. Built with modern web technologies.",
      tech: ["React", "CSS", "JavaScript", "API"],
      link: "https://babilons-amazon.netlify.app/",
      github: "#",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop"
    },
    {
      title: "Netflix Clone",
      description: "A Netflix-inspired streaming platform interface with movie browsing, categories, and responsive design.",
      tech: ["HTML", "CSS", "JavaScript", "API"],
      link: "https://abudiayu.github.io/netflix/",
      github: "#",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&h=400&fit=crop"
    },
    {
      title: "Cafe Delivery Website",
      description: "A modern cafe delivery platform featuring menu browsing, order management, and delivery tracking.",
      tech: ["React", "Node.js", "CSS", "MongoDB"],
      link: "https://ourscafe.netlify.app",
      github: "#",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop"
    },
    {
      title: "Interactive Game",
      description: "An engaging browser-based game with smooth animations and interactive gameplay mechanics.",
      tech: ["JavaScript", "Canvas", "HTML5", "CSS3"],
      link: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop"
    },
    {
      title: "Real-time Chat Application",
      description: "A real-time messaging application with user authentication and instant message delivery.",
      tech: ["React", "Socket.io", "Node.js", "Express"],
      link: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop"
    }
  ];

  return (
    <>
      <section className={classes.projuct_container}>
        <div className={classes.projuct_wrapper}>
          <h1>Projects</h1>
          <div className={classes.projuct_list_container}>
            {projects.map((project, index) => (
              <a 
                key={index} 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${classes.project_card} ${index % 2 === 1 ? classes.reverse : ''}`}
                style={{ textDecoration: 'none' }}
              >
                <div className={classes.project_content}>
                  <div className={classes.project_header}>
                    <span className={classes.project_number}>0{index + 1}.</span>
                    <h3>{project.title}</h3>
                  </div>
                  <p className={classes.project_description}>{project.description}</p>
                  <div className={classes.tech_stack}>
                    {project.tech.map((tech, i) => (
                      <span key={i} className={classes.tech_tag}>{tech}</span>
                    ))}
                  </div>
                  <div className={classes.project_links}>
                    {project.link !== "#" && (
                      <span>
                        <OpenInNew />
                      </span>
                    )}
                    {project.github !== "#" && (
                      <span>
                        <GitHub />
                      </span>
                    )}
                  </div>
                </div>
                <div className={classes.project_image}>
                  <img src={project.image} alt={project.title} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projucts;