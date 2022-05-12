import * as React from "react";
import styles from "../../styles/NavBar.module.scss";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const PRINT_ME = [
    {
      link: "#about",
      name: "About",
    },
    {
      link: "#projects",
      name: "Projects",
    },
    {
      link: "#messageMe",
      name: "Message Me",
    },
  ];
  return (
    <section className={styles.navbar}>
      <div className={styles.navLinks}>
        <ul className={styles.navLinksContainer}>
          {PRINT_ME.map((data, index) => {
            return <li key={index}>{data.name}</li>;
          })}
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
              {PRINT_ME.map((data, index) => {
                return <li key={index}>{data.name}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default NavBar;
