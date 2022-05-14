import { workData } from "./work-data";
import styles from "../../styles/Projects.module.scss";

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <h2>Projects</h2>
      <p>(Work Related)</p>
      <ul className={styles.projectsContainer}>
        {workData.map((data, index) => {
          return (
            <li key={index} className={styles.projectList}>
              <img src={data.src} alt={data.company} />
              <h2 className={styles.company}>
                <span>Company: </span>
                {data.company}
              </h2>

              <ul>
                <p>
                  <span>Links: </span>
                  {data.links.map((link: any, index) => {
                    return (
                      <li key={index}>
                        <a href={link} target="_blank" className={styles.links}>
                          {link.link}
                        </a>
                      </li>
                    );
                  })}
                </p>
              </ul>
              <p>
                <span>Technology Used: </span>
                {data.techUsed}
              </p>
              <p>
                <span>Description: </span>
                {data.description}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
