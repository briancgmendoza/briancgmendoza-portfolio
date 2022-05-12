import NavBar from "../NavBar";
import Carousel from "../Carousel";

import styles from "../../styles/Layout.module.scss";

const Layout = () => {
  return (
    <section className={styles.layoutContainer}>
      <NavBar />
      <Carousel />
    </section>
  );
};

export default Layout;
