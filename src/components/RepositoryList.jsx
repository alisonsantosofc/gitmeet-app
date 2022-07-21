import { RepositoryListItem } from "./RepositoryListItem";

export function RepositoryList() {
  const repository = {
    name: 'gitmeet-app',
    description: 'Explore github repositories',
    link: 'https://github.com/alisonsantosofc/gitmeet-app',
  }

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryListItem repository={repository}/>
        <RepositoryListItem repository={repository}/>
        <RepositoryListItem repository={repository}/>
      </ul>
    </section>
  )
};