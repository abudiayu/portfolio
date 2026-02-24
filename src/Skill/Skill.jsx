import React from 'react';
import classes from "./skill.module.css";

function Skill() {
  const skills = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#e34c26' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#264de4' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#f0db4f' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61dafb' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#68a063' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#06b6d4' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', color: '#ff2d20' },
  ];

  return (
    <>
        <section className={classes.skill_container}>
            <h1>Skills</h1>
            <div className={classes.skill_icon_container}>
                {skills.map((skill, index) => (
                    <div key={index} className={classes.skill_item} style={{ borderColor: skill.color }} data-name={skill.name}>
                        <img src={skill.icon} alt={skill.name} />
                    </div>
                ))}
                {skills.map((skill, index) => (
                    <div key={`duplicate-${index}`} className={classes.skill_item} style={{ borderColor: skill.color }} data-name={skill.name}>
                        <img src={skill.icon} alt={skill.name} />
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}

export default Skill;