import React from 'react';
import { NavLink, 
  // useNavigate, useLocation 
} from 'react-router-dom';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from './navbar.module.css';

const Navbar = () => {
  // const navigate = useNavigate();
  // const location = useLocation();
  
  const routes = ['/', '/About', '/Resume', '/Certifications', '/Projects', '/Contact'];
  // Nav Arrow Feature .

  // const goBack = () => navigate(-1);

  // const goForward = () => {
  //   if (window.history.state && window.history.state.idx < window.history.length - 1) {
  //     navigate(1);
  //   } else {
  //     const currentIndex = routes.indexOf(location.pathname);
  //     const nextIndex = (currentIndex + 1) % routes.length;
  //     navigate(routes[nextIndex]);
  //   }
  // };

  return (
    <div className={styles.nav}>
      {/* <button className={styles.navArrow} onClick={goBack}>
        <FaArrowLeft />
      </button> */}
      {routes.map((route, index) => (
        <NavLink
          key={index}
          className={({ isActive }) => (isActive ? styles.active : styles.navButton)}
          to={route}
        >
          {route.slice(1) || 'Home'}
        </NavLink>
      ))}
      {/* <button className={styles.navArrow} onClick={goForward}>
        <FaArrowRight />
      </button> */}
    </div>
  );
};

export default Navbar;
