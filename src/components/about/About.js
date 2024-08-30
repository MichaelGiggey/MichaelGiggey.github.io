import React from 'react';
import { Link } from 'react-router-dom';
import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutMe}>
        <h1>About Me</h1>
        <br/>
        <p>
          Hello! My name is Michael Giggey, a dedicated developer with a passion for building intuitive and responsive web applications with an keen eye for detail. My journey in tech began with a fascination for coding and problem-solving, and it has since evolved into a full-fledged career.
        </p>
        <p>
          I specialize in front-end development, particularly with HTML, CSS, JavaScript, React, and I enjoy creating responsive seamless user experiences. My background includes a diverse range of projects, from small-scale applications to complex solutions. I'm always learning and adapting to new technologies to stay ahead in this ever-evolving field.
        </p>
        <p>
          When I'm not programming, I enjoy hiking, travelling, movies, gaming, and various forms of building, which help me stay creative and balanced. I'm also an advocate for continuous learning and enjoy sharing knowledge with others through any means.
        </p>
        <p>
          If you're interested in working together or just want to chat, feel free to reach out!
        </p>
        <div>
          <Link to="/resume" className={styles.link}>See my Resume</Link>
          <br />
          <Link to="/resume" className={styles.link}>See my Certifications</Link>
          <br />
          <Link to="/" className={styles.link}>Back to Home</Link>
          <br />
          <Link to="/contact" className={styles.link}>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
