import './RepositoryListItem.scss';

import background from '../assets/github-background.svg';

export function RepositoryListItem({repository}) {
  return (
    <li className="repository-list-item">
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url} target={'_blank'}>
        Acessar no github
      </a>

      <img src={background} alt="background" />
    </li>
  )
};