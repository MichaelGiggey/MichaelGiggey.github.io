import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './certifications.module.css';

const Certifications = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };
  const Codecademy = () => {
    return (
      <div>
        <span className={styles.code}>Code</span>
        <span className={styles.c}>c</span>ademy
      </div>
    ) 
  }

  const certificates = [
    {
      title: "Front-End Engineer",
      organization: (<Codecademy/>),
      link: "https://www.codecademy.com/profiles/MichaelsCodecademy",
      imgSrc: "/certificates/Front-End Engineer-1.png",
      pdfLink: "/certificates/Front-End Engineer.pdf",
    },
    {
      title: "Advanced Web App React & Redux",
      organization: (<Codecademy/>),
      link: "https://www.codecademy.com/profiles/MichaelsCodecademy",
      imgSrc: "/certificates/Advanced Web App React and Redux-1.png",
      pdfLink: "/certificates/Advanced Web App React and Redux.pdf",
    },
    {
      title: "Advanced Web Development",
      organization: (<Codecademy/>),
      link: "https://www.codecademy.com/profiles/MichaelsCodecademy",
      imgSrc: "/certificates/Advanced Web Development-1.png",
      pdfLink: "/certificates/Advanced Web Development.pdf",
    },
    {
      title: "Basics of Back-End Development",
      organization: (<Codecademy/>),
      link: "https://www.codecademy.com/profiles/MichaelsCodecademy",
      imgSrc: "/certificates/Basics of Back-End Development-1.png",
      pdfLink: "/certificates/Basics of Back-End Development.pdf",
    },
    {
      title: "Algorithms",
      organization: (<Codecademy/>),
      link: "https://www.codecademy.com/profiles/MichaelsCodecademy",
      imgSrc: "/certificates/Algorithms-1.png",
      pdfLink: "/certificates/Algorithms.pdf",
    },
    {
      title: "Complex Data Structures",
      organization: (<Codecademy/>),
      link: "https://www.codecademy.com/profiles/MichaelsCodecademy",
      imgSrc: "/certificates/Complex Data Structures-1.png",
      pdfLink: "/certificates/Complex Data Structures.pdf",
    },
    {
      title: "Linear Data Structures",
      organization: (<Codecademy/>),
      link: "https://www.codecademy.com/profiles/MichaelsCodecademy",
      imgSrc: "/certificates/Linear Data Structures-1.png",
      pdfLink: "/certificates/Linear Data Structures.pdf",
    },
    {
      title: "Search and Graph Search Algorithms",
      organization: (<Codecademy/>),
      link: "https://www.codecademy.com/profiles/MichaelsCodecademy",
      imgSrc: "/certificates/Search and Graph Search Algorithms-1.png",
      pdfLink: "/certificates/Search and Graph Search Algorithms.pdf",
    },
    {
      title: "React",
      organization: (<Codecademy/>),
      link: "https://www.codecademy.com/profiles/MichaelsCodecademy",
      imgSrc: "/certificates/React-1.png",
      pdfLink: "/certificates/React.pdf",
    },
    {
      title: "Redux",
      organization: (<Codecademy/>),
      link: "https://www.codecademy.com/profiles/MichaelsCodecademy",
      imgSrc: "/certificates/Redux-1.png",
      pdfLink: "/certificates/Redux.pdf",
    },
    {
      title: "Interactive Websites with JavaScript",
      organization: (<Codecademy/>),
      link: "https://www.codecademy.com/profiles/MichaelsCodecademy",
      imgSrc: "/certificates/Interactive Websites with JavaScript-1.png",
      pdfLink: "/certificates/Interactive Websites with JavaScript.pdf",
    },
    {
      title: "Responsive Design",
      organization: (<Codecademy/>),
      link: "https://www.codecademy.com/profiles/MichaelsCodecademy",
      imgSrc: "/certificates/Responsive Design-1.png",
      pdfLink: "/certificates/Responsive Design.pdf",
    },
    {
      title: "Making A Website Accessible",
      organization: (<Codecademy/>),
      link: "https://www.codecademy.com/profiles/MichaelsCodecademy",
      imgSrc: "/certificates/Website Accessible-1.png",
      pdfLink: "/certificates/Website Accessible.pdf",
    },
    {
      title: "Transitions and Animation",
      organization: (<Codecademy/>),
      link: "https://www.codecademy.com/profiles/MichaelsCodecademy",
      imgSrc: "/certificates/Transitions and Animation-1.png",
      pdfLink: "/certificates/Transitions and Animation.pdf",
    },
  ];

  return (
    <div className={styles.certificationsContainer}>
      <h1>Certifications</h1>
      <p className={styles.intro}>
        I'm proud to have earned several certifications that reflect my commitment
        to continuous learning and professional growth.
        Each certification has helped me develop specific skills and knowledge,
        contributing to my expertise in the field of web development.
        <br />
        More of my certifications can be viewed on
        <a href="https://www.codecademy.com/profiles/MichaelsCodecademy"
          target="_blank" rel="noopener noreferrer"
          className={styles.link}>
            <span className={styles.code}>Code</span>
            <span className={styles.c}>c</span>ademy
        </a>.
        <br />
        Here are some of the certifications I've achieved:
      </p>
      <div className={styles.cardGrid}>
        {certificates.map((cert, index) => (
          <div
            key={index}
            className={`${styles.certCard} ${activeCard === index ? styles.activeCard : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <img
              src={cert.imgSrc}
              alt={`${cert.title} thumbnail`}
              className={styles.thumbnail}
              loading="lazy"
            />
            <div className={styles.cardContent}>
              <strong className={styles.certTitle}>{cert.title}</strong> - Issued by
              <Link
                className={`${styles.organization} ${styles.link}`}
                to={cert.link}
              >
                {cert.organization}
              </Link>
              <a href={cert.pdfLink} target="_blank"
                rel="noopener noreferrer"
                className={`${styles.certLink} ${styles.link}`}
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Link to="/projects" className={styles.link}>See my Projects</Link>
        <br />
        <Link to="/" className={styles.link}>Back to Home</Link>
        <br />
        <Link to="/contact" className={styles.link}>Contact</Link>
      </div>
    </div>
  );
};

export default React.memo(Certifications);
