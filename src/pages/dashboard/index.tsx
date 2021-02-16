import React from 'react';
import { FiPower } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { Container, Header, HeaderContent, Profile } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logo} alt="GoBarber" />
          <Profile>
            <img
              src="https://avatars.githubusercontent.com/u/49591933?s=460&u=3fe631a5a78012f55ebba2f51ac6b0a6fae53526&v=4"
              alt="Rafael Silva"
            />
            <div>
              <span>Bem-vindo,</span>
              <strong>Rafael Silva</strong>
            </div>
          </Profile>

          <button type="button">
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Dashboard;
