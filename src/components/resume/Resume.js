import React from 'react';
import { Link } from 'react-router-dom';
import styles from './resume.module.css';

const Resume = () => {
  return (
    <div className={styles.resumeContainer}>
      <h1>My Resume</h1>
      <p className={styles.intro}>
        I'm excited to share my resume with you. Here, you can view or download my latest resume to learn more about my professional background, skills, and experiences.
      </p>
      <a href="/resume/Giggey, Michael - Resume.docx" download className={styles.resumeLink}>
        Download/View My Resume(Microsoft Word)
      </a>
      <a href="/resume/Giggey, Michael Resume.pdf" download className={styles.resumeLink}>
        Download/View My Resume(Pdf)
      </a>
      <object
        className={styles.resumeIframe}
        data="/resume/Giggey, Michael ResumeOnePage.pdf"
        type="application/pdf"
        aria-label="Resume"
        title="Resume"
      />        
      <div>
          <Link to="/certifications" className={styles.link}>See my Certifications</Link>
          <br />
          <Link to="/" className={styles.link}>Back to Home</Link>
          <br />
          <Link to="/contact" className={styles.link}>Contact</Link>
        </div>
    </div>
  );
};

export default Resume;
