import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FunctionComponent = () => {
  return (
    <>
      <img src={logoImg} width={400} alt="Github RepoExplorer" />

      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />

        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/84480176?v=4"
            alt="Alison Santos"
          />

          <div>
            <strong>alisonsantosofc/nodejs-transactions-api</strong>
            <p>API to calculate and store income and expense transactions.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
