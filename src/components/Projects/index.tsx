import { workData } from "./work-data";
import styles from "../../styles/Projects.module.scss";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <p>(Work Related)</p>
      <ul className={styles.projectsContainer}>
        {workData.map((data, index) => {
          return (
            <li key={index} className={styles.projectList}>
              <img src={data.src} alt={data.company} />
              <h2>
                <span>Company: </span>
                {data.company}
              </h2>
              <p>
                <span>Links: </span>
                <ul>
                  {data.links.map((link: any) => {
                    return (
                      <li>
                        <a href={link} target="_blank">
                          {link.link}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </p>
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
