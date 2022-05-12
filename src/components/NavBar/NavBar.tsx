import * as React from "react";
import styles from "../../styles/NavBar.module.scss";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <section className={styles.navbar}>
      <div className={styles.navLinks}>
        <ul className={styles.navLinksContainer}>
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#email">Email</a>
          </li>
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
              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#projects">Projects</a>
              </li>

              <li>
                <a href="#email">Email</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default NavBar;
