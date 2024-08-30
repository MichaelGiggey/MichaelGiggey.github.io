import React from 'react';
import { Link } from 'react-router-dom';
import styles from './projects.module.css';
import { IoLogoReddit } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <h1>Welcome to My Projects!</h1>
      <p className={styles.intro}>
        Here are some of the projects I've worked on.
        <br />
        Click on each project to learn more about it:
      </p>
      <div className={styles.projectsList}>

        <div className={styles.projectWrapper}>
          <Link to="/portfolio" className={styles.project}>
            <span className={styles.projectIcon}>🌐</span>
            Old Portfolio Website
          </Link>
          <div className={styles.projectDescription}>
            My First Portfolio Website I hosted on Github, well just the structure.
            Made with basic Html, Css, and JavaScript. This was my first month
            learning Web development. Unintentionally built to mimic React by utilizing iframes tags.
          </div>
        </div>

        <div className={styles.projectWrapper}>
          <Link to="https://github.com/MichaelGiggey/MichaelGiggey.github.io" className={styles.project}>
            <span className={styles.projectIcon}>
              <FaGithub title="GitHub" />
            </span>
            React Portfolio Website
          </Link>
          <div className={styles.projectDescription}>
            My Current Portfolio Website I have hosted on Github, this is the
            link to the Github Repo.
          </div>
        </div>

        <div className={styles.projectWrapper}>
          <Link to="/reddit" className={styles.project}>
            <IoLogoReddit className={styles.redditLogo} />
            Reddit Light
          </Link>
          <div className={styles.projectDescription}>
            A minimalist Reddit client. This project focuses on providing simplified browsing for Reddit posts. Users can view posts from various subreddits, search , and be directed to Reddit posts. This app leverages the public Reddit API to fetch real-time data, offering a simple and engaging browsing experience.
          </div>
        </div>

        <div className={styles.projectWrapper}>
          <Link to="/weather" className={styles.project}>
            <span className={styles.projectIcon}>☀️</span>
            Weather App
          </Link>
          <div className={styles.projectDescription}>
            A real-time weather application that provides current weather and forecasts using a public API.
          </div>
        </div>

        <div className={styles.projectWrapper}>
          <Link to="/projects" className={styles.project}>
            <span className={styles.projectIcon}>🎮</span>
            Game Project Coming Soon!
          </Link>
          <div className={styles.projectDescription}>
            An interactive game built with React, featuring engaging gameplay and dynamic UI. Coming Soon!
          </div>
        </div>

        <div className={styles.projectWrapper}>
          <Link to="/projects" className={styles.project}>
            Project Coming Soon!
          </Link>
          <div className={styles.projectDescription}>
            Coming Soon!
          </div>
        </div>

        <div className={styles.projectWrapper}>
          <Link to="/projects" className={styles.project}>
            Project Coming Soon!
          </Link>
          <div className={styles.projectDescription}>
            Coming Soon!
          </div>
        </div>

        <div className={styles.projectWrapper}>
          <Link to="/projects" className={styles.project}>
            Project Coming Soon!
          </Link>
          <div className={styles.projectDescription}>
            Coming Soon!
          </div>
        </div>

        <div className={styles.projectWrapper}>
          <Link to="/projects" className={styles.project}>
            Project Coming Soon!
          </Link>
          <div className={styles.projectDescription}>
            Coming Soon!
          </div>
        </div>

        <div className={styles.projectWrapper}>
          <Link to="/projects" className={styles.project}>
            Project Coming Soon!
          </Link>
          <div className={styles.projectDescription}>
            Coming Soon!
          </div>
        </div>

        <div className={styles.projectWrapper}>
          <Link to="/projects" className={styles.project}>
            Project Coming Soon!
          </Link>
          <div className={styles.projectDescription}>
            Coming Soon!
          </div>
        </div>

        <div className={styles.projectWrapper}>
          <Link to="/projects" className={styles.project}>
            Project Coming Soon!
          </Link>
          <div className={styles.projectDescription}>
            Coming Soon!
          </div>
        </div>

        <div className={styles.projectWrapper}>
          <Link to="/projects" className={styles.project}>
            Project Coming Soon!
          </Link>
          <div className={styles.projectDescription}>
            Coming Soon!
          </div>
        </div>

        <div className={styles.projectWrapper}>
          <Link to="/projects" className={styles.project}>
            Project Coming Soon!
          </Link>
          <div className={styles.projectDescription}>
            Coming Soon!
          </div>
        </div>

        <div className={styles.projectWrapper}>
          <Link to="/projects" className={styles.project}>
            Project Coming Soon!
          </Link>
          <div className={styles.projectDescription}>
            Coming Soon!
          </div>
        </div>

        <div className={styles.projectWrapper}>
          <Link to="/projects" className={styles.project}>
            Project Coming Soon!
          </Link>
          <div className={styles.projectDescription}>
            Coming Soon!
          </div>
        </div>

        <div className={styles.projectWrapper}>
          <Link to="/projects" className={styles.project}>
            Project Coming Soon!
          </Link>
          <div className={styles.projectDescription}>
            Coming Soon!
          </div>
        </div>

        <div className={styles.projectWrapper}>
          <Link to="/projects" className={styles.project}>
            Project Coming Soon!
          </Link>
          <div className={styles.projectDescription}>
            Coming Soon!
          </div>
        </div>
        
      </div>
      <div>
        <br />
        <Link to="/" className={styles.link}>Back to Home</Link>
        <br />
        <br />
        <Link to="/contact" className={styles.link}>Contact</Link>
      </div>
    </div>
  );
};

export default Projects;
