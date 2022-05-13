import { aboutData } from "./about-data";
import styles from "../../styles/About.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <h1>About Me</h1>
      {aboutData.map((data) => {
        return (
          <>
            <h2 className={styles.name}>{data.name}</h2>
            <p className={styles.work}>{data.work}</p>
            <ul className={styles.skillsContainer}>
              My Skills
              {data.skills.map((skills, index) => {
                return (
                  <li key={index} className={styles.skills}>
                    <span>{skills.span}</span>
                    {skills.skills}
                  </li>
                );
              })}
            </ul>
          </>
        );
      })}
    </section>
  );
};

export default About;
