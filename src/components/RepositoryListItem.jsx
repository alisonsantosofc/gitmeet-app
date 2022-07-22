import './RepositoryListItem.scss';

export function RepositoryListItem({repository}) {
  return (
    <li className="repository-list-item">
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url} target={'_blank'}>
        Acessar no github
      </a>
    </li>
  )
};