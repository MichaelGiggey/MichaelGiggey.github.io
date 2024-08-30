import React from 'react';
import { Link } from 'react-router-dom';
import styles from './portfolio.module.css';

const Portfolio = () => {
  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.iframeWrapper}>
      <iframe
        src="./oldPortfolio/index.html"
        title='Old Portfolio Website'
        className={styles.iframe}
      />
      </div>
      <div>
        <Link to="/projects" className={styles.link}>Back to Projects</Link>
      </div>
    </div>
  );
};

export default Portfolio;