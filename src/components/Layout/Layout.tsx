import SinglePage from "../../pages/SinglePage";
import NavBar from "../NavBar/NavBar";
import styles from "../../styles/Layout.module.scss";

const Layout = () => {
  return (
    <section className={styles.layoutContainer}>
      <NavBar />
      <SinglePage />
    </section>
  );
};

export default Layout;
