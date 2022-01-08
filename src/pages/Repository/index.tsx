import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';
import { Header, RepositoryInfo, Issues } from './styles';

import logoImg from '../../assets/logo.svg';

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  open_issues_count: number;
  forks_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FunctionComponent = () => {
  const [repositoryData, setRepositoryData] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { user, repository } = useParams();

  useEffect(() => {
    api.get(`repos/${user}/${repository}`).then((response) => {
      setRepositoryData(response.data);
    });

    api.get(`repos/${user}/${repository}/issues`).then((response) => {
      setIssues(response.data);
    });
  }, [repository]); // eslint-disable-line

  return (
    <>
      <Header>
        <img src={logoImg} width={400} alt="GitHub RepoExplorer" />

        <Link to="/">
          <FiChevronLeft size={18} />
          Voltar
        </Link>
      </Header>

      {repositoryData && (
        <RepositoryInfo>
          <header>
            <img
              src={repositoryData.owner.avatar_url}
              alt={repositoryData.owner.login}
            />

            <div>
              <strong>{repositoryData.full_name}</strong>
              <p>{repositoryData.description}</p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repositoryData.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repositoryData.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repositoryData.open_issues_count}</strong>
              <span>Issues</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map((issue) => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
