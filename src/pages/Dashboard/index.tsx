import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './style';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer"/>
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositorio"/>
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/69028381?s=460&u=79f997da3a3d558ac714d85b6774cb702ab40d6d&v=4"
            alt="Kaik Oliveira"
          />
          <div>
            <strong>KaikOliveira/Bootcamp</strong>
            <p>Reactjs, React Native, Node js</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/69028381?s=460&u=79f997da3a3d558ac714d85b6774cb702ab40d6d&v=4"
            alt="Kaik Oliveira"
          />
          <div>
            <strong>KaikOliveira/Bootcamp</strong>
            <p>Reactjs, React Native, Node js</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/69028381?s=460&u=79f997da3a3d558ac714d85b6774cb702ab40d6d&v=4"
            alt="Kaik Oliveira"
          />
          <div>
            <strong>KaikOliveira/Bootcamp</strong>
            <p>Reactjs, React Native, Node js</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard;
