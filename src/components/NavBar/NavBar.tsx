import * as React from "react";
import styles from "../../styles/NavBar.module.scss";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <section className={styles.navbar}>
      <div className={styles.navLinks}>
        <ul className={styles.navLinksContainer}>
          <li>About</li>
          <li>Projects</li>
          <li>Message Me</li>
        </ul>
      </div>

      <div
        className={styles.navMenu}
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <span className={`${toggleMenu && `${styles.activeTop}`}`}></span>
        <span className={`${toggleMenu && `${styles.activeMid}`}`}></span>
        <span className={`${toggleMenu && `${styles.activeBot}`}`}></span>

        {toggleMenu && (
          <div className={styles.navMenuContainer}>
            <ul className={styles.navMenuContainerLinks}>
              <li>About</li>
              <li>Projects</li>
              <li>Message Me</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default NavBar;
