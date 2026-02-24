import React, { useState, useEffect } from 'react'
import classes from "./about.module.css";
import { Code, PhoneAndroid, Web } from '@mui/icons-material';
import abudy from "../assets/abudy.jpg";

function About() {
  const [counts, setCounts] = useState({ projects: 0, satisfaction: 0, experience: 0 });

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const targets = { projects: 120, satisfaction: 95, experience: 5 };
    const increments = {
      projects: targets.projects / steps,
      satisfaction: targets.satisfaction / steps,
      experience: targets.experience / steps
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      if (currentStep <= steps) {
        setCounts({
          projects: Math.min(Math.floor(increments.projects * currentStep), targets.projects),
          satisfaction: Math.min(Math.floor(increments.satisfaction * currentStep), targets.satisfaction),
          experience: Math.min(Math.floor(increments.experience * currentStep), targets.experience)
        });
      } else {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
        <section className={classes.about_container}>
            <h1 className={classes.about_title}>About me</h1>
            <div className={classes.about_content}>
                <div className={classes.about_left}>
                    <div className={classes.image_container}>
                        <img src={abudy} alt="Profile" />
                    </div>
                    <div className={classes.services_list}>
                        <div className={classes.service_item}>
                            <div className={classes.service_icon}>
                                <Code />
                            </div>
                            <span>Website Development</span>
                        </div>
                        <div className={classes.service_item}>
                            <div className={classes.service_icon}>
                                <PhoneAndroid />
                            </div>
                            <span>App Development</span>
                        </div>
                        <div className={classes.service_item}>
                            <div className={classes.service_icon}>
                                <Web />
                            </div>
                            <span>Website Hosting</span>
                        </div>
                    </div>
                </div>
                
                <div className={classes.about_right}>
                    <p>
                        I started my software journey from a young age. Through that, I discovered 
                        how the process of creating from scratch to finish is a fulfilling way to use 
                        my background and building things.
                    </p>
                    
                    <div className={classes.stats_container}>
                        <div className={classes.stat_item}>
                            <h2>{counts.projects}<span>+</span></h2>
                            <p>Completed<br/>Projects</p>
                        </div>
                        <div className={classes.stat_item}>
                            <h2>{counts.satisfaction}<span>%</span></h2>
                            <p>Client<br/>Satisfaction</p>
                        </div>
                        <div className={classes.stat_item}>
                            <h2>{counts.experience}<span>+</span></h2>
                            <p>Years of<br/>Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About;