import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.header}>Welcome to My Portfolio!</h1>
      <p className={styles.intro}>
        Hi there! My name is <strong>Michael Giggey</strong>, a passionate developer with a strong background in creating dynamic and responsive user-friendly web applications. My journey in tech has led me through a variety of projects, each one honing my skills in HTML, CSS, JavaScript, React, Front-End Development, Back-End Development, and problem-solving.
      </p>
      <div className={styles.intro}>
        <p>
          <strong>In this portfolio,</strong>
          <br/>
          You will be able to learn more <Link to="/about" className={styles.link}>about </Link>me.
          <br/>
          View/Download My <Link to="/about" className={styles.link}>Resume</Link>.
          <br/>
          You'll see what <Link to="/certifications" className={styles.link}>certificates</Link> I have earned so far.
          <br/>
          Feel free to explore and see a few <Link to="/projects" className={styles.link}> projects </Link> I've been working on.
          <br/>
        </p>
        <br/>
        <p>
          I'm always eager to take on new challenges and collaborate on   
          exciting projects!
          <br/>
          This Portfolio along with all my projects are under constant development.
        <br/>  
        Come back soon to see what I have been up too.</p>
      </div>
      <br/>
      <div>
        <Link to="/about" className={styles.link}>Learn more about me</Link>
        <br/>
        <br/>
        <Link to="/contact" className={styles.link}>Contact</Link>
      </div>
    </div>
  );
};

export default Home;
