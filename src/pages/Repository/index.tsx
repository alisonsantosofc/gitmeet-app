import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';

import logoImg from '../../assets/logo.svg';

const Repository: React.FunctionComponent = () => {
  const { user, repository } = useParams();

  return (
    <>
      <Header>
        <img src={logoImg} width={400} alt="GitHub RepoExplorer" />

        <Link to="/">
          <FiChevronLeft size={18} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/84480176?v=4"
            alt="Alison Santos"
          />

          <div>
            <strong>alisonsantosofc/nodejs-users-api</strong>
            <p>descrição do repositório.</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>850</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="sdsdf">
          <div>
            <strong>alisonsantosofc/nodejs-users-api</strong>
            <p>Uma API para usuários.</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
