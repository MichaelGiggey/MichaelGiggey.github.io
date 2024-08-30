import React from "react";
import styles from './footer.module.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaNode, FaNpm } from 'react-icons/fa';
import { SiWebpack, SiBabel, SiVisualstudiocode, SiReactrouter, SiRedux, SiGnubash } from 'react-icons/si';


const Footer = () => {

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerIcons}>
          <FaHtml5 title="HTML5" />
          <FaCss3Alt title="CSS3" />
          <FaJs title="JavaScript" />
          <FaReact title="React" />
          <SiReactrouter title="React Router" />
          <SiRedux title="Redux" />
          <FaGitAlt title="Git" />
          <FaGithub title="GitHub" />
          <SiGnubash title="Bash" />
          <FaNode title="Node.js" />
          <FaNpm title="NPM" />
          <SiWebpack title="Webpack" />
          <SiBabel title="Babel" />
          <SiVisualstudiocode title="VS Code" />
        </div>
        <p>© 2024 Michael J.C Giggey.
          <span className={styles.license}> This project is licensed under the
            <a className={styles.licenseAnchor} href="https://opensource.org/licenses/MIT"
              target="_blank" rel="noopener noreferrer"> MIT License
            </a>.
          </span>
        </p>
      </div>
    </>
  )
}

export default Footer;