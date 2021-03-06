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
              <p>
                <span>Technology Used: </span>
                {data.techUsed}
              </p>
              <p>
                <span>Description: </span>
                {data.description}
              </p>
              <ul>
                <p>
                  <span>Links: </span>
                  {data.links.map((link: any, index) => {
                    return (
                      <li key={index}>
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href={link.link}
                          className={styles.links}
                        >
                          {link.link}
                        </a>
                      </li>
                    );
                  })}
                </p>
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
