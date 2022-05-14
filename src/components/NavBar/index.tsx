import * as React from "react";

import { navData } from "./nav-data";
import styles from "../../styles/NavBar.module.scss";
import Modal from "../Modal";
import Form from "../Form";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <section className={styles.navbar}>
      <div className={styles.navLinks}>
        <ul className={styles.navLinksContainer}>
          {navData.map((data, index) => {
            return (
              <li key={index}>
                <a href={data.link} className={styles.link}>
                  {data.name}
                </a>
              </li>
            );
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
              {navData.map((data, index) => {
                const magicNumber = 2;
                return (
                  <li key={index}>
                    {index !== magicNumber ? (
                      <a href={data.link} className={styles.link}>
                        {data.name}
                      </a>
                    ) : (
                      <i
                        className={styles.link}
                        onClick={() => {
                          console.log(data.name);
                        }}
                      >
                        {data.name}
                      </i>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default NavBar;
