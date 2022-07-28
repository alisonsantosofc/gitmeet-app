import { useEffect, useState } from "react";

import { RepositoryItem } from "./RepositoryItem";

import './RepositoryList.scss';

interface RepositoryListProps {
  userName: string;
}

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList(props: RepositoryListProps) {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${props.userName}/repos`)
    .then(response => response.json())
    .then(data => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.id} repository={repository}/>;
        })}
      </ul>
    </section>
  )
};