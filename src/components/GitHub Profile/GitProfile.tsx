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
          Avatar: <img src={user.avatar_url} alt={user.login} />
        </li>
        <li>Git: {user.login}</li>
        <li>Name: {user.name}</li>
        <li>Bio: {user.bio}</li>
      </ul>
      <ul>
        {repos.map((data: any, index: number) => {
          return (
            <li key={index}>
              <h2>Repo Name: {data.name}</h2>
              <p>Live Demo: {data.homepage}</p>
              <p>Repo Link: {data.html_url}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default GitProfile;
