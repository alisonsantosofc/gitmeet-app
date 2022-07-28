import React from 'react';

import './RepositoryItem.scss';

interface RepositoryListItemProps {
  repository: {
    id: number;
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: RepositoryListItemProps) {
  return (
    <li className="repository-list-item">
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url} target={'_blank'}>
        Acessar no github
      </a>
    </li>
  )
};