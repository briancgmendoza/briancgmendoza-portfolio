import * as React from "react";
import Axios from "axios";

import styles from "../../styles/GitProfile.module.scss";

type User = {
  login?: string;
  avatar_url?: string;
  name?: string;
  bio?: string;
};

type Repos = {
  id?: number;
  name?: string;
  homepage?: string;
  html_url?: string;
};

const GitProfile = () => {
  const [user, setUser] = React.useState<User>({
    login: "",
    avatar_url: "",
    name: "",
    bio: "",
  });

  const [repos, setRepos] = React.useState<Repos | any>([]);

  React.useEffect(() => {
    const getUser = async () => {
      const APIURL = "https://api.github.com/users/briancgmendoza";
      try {
        Axios.get(APIURL).then((response) => setUser(response.data));
      } catch (err) {
        console.log(err);
      }
    };

    const getRepos = async () => {
      const APIURL =
        "https://api.github.com/users/briancgmendoza/repos?sort=created";

      try {
        Axios.get(APIURL).then((response) => setRepos(response.data));
      } catch (err) {
        console.log(err);
      }
    };

    getUser();
    getRepos();
  }, []);

  return (
    <section className={styles.gitProfile}>
      <h2 className={styles.title}>My Git Profile</h2>
      <p className={styles.subTitle}>(Personal Projects / Exams)</p>
      <ul>
        <li>
          <img src={user.avatar_url} alt={user.login} />
        </li>
        <li>
          <span>Git Username: </span>
          {user.login}
        </li>
        <li>
          <span>Name: </span>
          {user.name}
        </li>
        <li>
          <span>Bio: </span>
          {user.bio}
        </li>
      </ul>
      <ul className={styles.reposContainer}>
        {repos.map((data: any, index: number) => {
          return (
            data.name !== "briancgmendoza" && (
              <li key={index}>
                <h2 className={styles.repoName}>
                  <span>Repo Name: </span>
                  {data.name}
                </h2>
                <p>
                  <span>Live Demo: </span>
                  {data.homepage ? (
                    <a href={data.homepage} target="_blank">
                      {data.homepage}
                    </a>
                  ) : (
                    "No link available"
                  )}
                </p>
                <p>
                  <span>Repo Link: </span>
                  <a href={data.html_url} target="_blank">
                    {data.html_url}
                  </a>
                </p>
                <p>
                  <span>Technologies Used: </span>
                  {data.description}
                </p>
              </li>
            )
          );
        })}
      </ul>
    </section>
  );
};

export default GitProfile;
