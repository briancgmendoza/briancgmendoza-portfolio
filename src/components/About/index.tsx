import { aboutData } from "./about-data";
import { workExp } from "./work-experience";
import styles from "../../styles/About.module.scss";

const About = () => {
  return (
    <>
      <section className={styles.about}>
        <h1>About Me</h1>
        {aboutData.map((data) => {
          return (
            <>
              <h3 className={styles.name}>{data.name}</h3>
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

      <section className={styles.workExp}>
        <h1>
          My Work Experience{" "}
          <sup>
            <a
              className="btnDownloadResume"
              // href="../assets/Resume/ResumeOfficial.pdf"
              // download="ResumeOfficial.pdf"
            >
              Download Resume
            </a>
          </sup>
        </h1>
        <ul className={styles.workExpContainer}>
          {workExp.map((data) => {
            return (
              <li>
                <h3 className={styles.company}>
                  <span>Company: </span>
                  {data.company}
                </h3>

                <p className={styles.position}>
                  <span>Position: </span>
                  {data.position}
                </p>

                <p className={styles.started}>
                  <span>Date Started: </span>
                  {data.dateStarted}
                </p>

                <p className={styles.until}>
                  <span>Until: </span>
                  {data.until}
                </p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default About;
