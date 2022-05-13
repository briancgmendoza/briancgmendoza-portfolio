import * as React from "react";

import NavBar from "../NavBar";
import Carousel from "../Carousel";
import About from "../About";
import GitProfile from "../GitHub Profile/GitProfile";

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
          <div className={styles.floatChild}>
            <About />
          </div>
          <div className={styles.floatChild}>
            <GitProfile />
          </div>
        </section>
      ) : (
        <>
          <About />
          <GitProfile />
        </>
      )}
    </section>
  );
};

export default Layout;
