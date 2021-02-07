import React from 'react';
import { useParams } from 'react-router-dom';

import { FaGithub } from 'react-icons/fa';
import { Container, Name, Footer } from './styles';

interface ParamTypes {
  username: string;
}

const UserNotFound: React.FC = () => {
  const { username } = useParams<ParamTypes>();

  return (
    <Container>
      <Name>User {username} not found.</Name>
      <Footer>
        <FaGithub />
        <a
          href='http://github.com/vini-coelho'
          target='_blank'
          rel='noreferrer'
        >
          Made with ♥ by Vinicius Coelho.
        </a>
      </Footer>
    </Container>
  );
};

export default UserNotFound;
