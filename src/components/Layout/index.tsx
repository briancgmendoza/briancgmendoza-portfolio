import * as React from "react";

import NavBar from "../NavBar";
import Carousel from "../Carousel";
import About from "../About";
import GitProfile from "../GitHub Profile/GitProfile";
import Projects from "../Projects";
import Email from "../Email";

import styles from "../../styles/Layout.module.scss";

const Layout = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <section className={styles.layoutContainer}>
      <NavBar />
      <Carousel />
      {width >= 800 ? (
        <section className={styles.rowSplit}>
          <div>
            <p>
              <i className={`${styles.arrow} ${styles.right}`}>Scrollable</i>
            </p>
          </div>
          <div className={styles.floatChild}>
            <About />
          </div>
          <div className={styles.floatChild}>
            <GitProfile />
          </div>
        </section>
      ) : (
        <section className={styles.colSplit}>
          <About />
          <GitProfile />
        </section>
      )}
      <Projects />
      <Email />
    </section>
  );
};

export default Layout;
