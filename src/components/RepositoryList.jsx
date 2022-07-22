import { RepositoryListItem } from "./RepositoryListItem";

import './RepositoryList.scss';
import { useEffect, useState } from "react";

export function RepositoryList({userName}) {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}/repos`)
    .then(response => response.json())
    .then(data => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryListItem repository={repository} key={repository.id}/>;
        })}
      </ul>
    </section>
  )
};