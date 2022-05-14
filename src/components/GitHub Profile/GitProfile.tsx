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

  console.log(user);

  return (
    <section className={styles.gitProfile}>
      <h2>My Git Profile</h2>
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
            <li key={index}>
              <h2>
                <span>Repo Name: </span>
                {data.name}
              </h2>
              <p>
                <span>Live Demo: </span>
                {data.homepage}
              </p>
              <p>
                <span>Repo Link: </span>
                {data.html_url}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default GitProfile;