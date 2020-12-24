import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useRouteMatch, Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/dashboard">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src={logoImg} alt="avatar" />
          <div>
            <strong>kaik/bootcamp</strong>
            <p>descripitions</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>120</strong>
            <span>Star</span>
          </li>
          <li>
            <strong>20</strong>
            <span>forks</span>
          </li>
          <li>
            <strong>12</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="sfada">
          <div>
            <strong>sfasd</strong>
            <p>fsaasd</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
