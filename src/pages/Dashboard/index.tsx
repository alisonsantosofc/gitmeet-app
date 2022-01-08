import React, { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories, Error, Header, Pagination } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FunctionComponent = () => {
  const [inputError, setInputError] = useState('');
  const [newRepository, setNewRepository] = useState('');
  const [repositoriesPerPage, setRepositoriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GitHubRepoExplorer:repositories'
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }

    return [];
  });

  const pages = Math.ceil(repositories.length / repositoriesPerPage);

  const startIndex = currentPage * repositoriesPerPage;
  const endIndex = startIndex + repositoriesPerPage;

  const currentRepositories = repositories.slice(startIndex, endIndex);

  useEffect(() => {
    localStorage.setItem(
      '@GitHubRepoExplorer:repositories',
      JSON.stringify(repositories)
    );
  }, [repositories]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!newRepository) {
      setInputError('! Digite o nome de usuário/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepository}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepository('');
      setInputError('');
    } catch {
      setInputError('! Erro na busca por esse repositório');
    }
  }

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github RepoExplorer" />
      </Header>

      <Title>
        <h1>Explore repositórios no Github</h1>
      </Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepository}
          onChange={(event) => setNewRepository(event.target.value)}
          placeholder="Nome do usuário/Nome do repositório"
        />

        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {currentRepositories.map((repository) => (
          <Link
            key={repository.full_name}
            to={`/repositories/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />

            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>

      <Pagination>
        {Array.from(Array(pages), (page, index) => {
          return (
            <button
              onClick={(event) =>
                setCurrentPage(
                  Number((event.target as HTMLButtonElement).value)
                )
              }
              value={index}
              type="button"
            >
              {index + 1}
            </button>
          );
        })}
      </Pagination>
    </>
  );
};

export default Dashboard;
