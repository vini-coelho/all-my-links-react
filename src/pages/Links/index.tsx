import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api';

import { FaGithub } from 'react-icons/fa';
import { Container, LinksContainer, LinkCard, Name, Footer } from './styles';

interface ParamTypes {
  username: string;
}

interface Link {
  id: number;
  name: string;
  url: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  links: Link[];
}

const Links: React.FC = () => {
  const { username } = useParams<ParamTypes>();
  const history = useHistory();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await api.get<User>(`/users/user/${username}`);
        setUser(response.data);
      } catch (err) {
        history.push(`/404/${username}`);
      }
    }

    getUser();
  }, []);

  function handleButtonClick(url: string) {
    window.open(url, '_blank');
  }

  return (
    <Container>
      <Name>{user?.name}</Name>
      <LinksContainer>
        {user?.links.map(link => (
          <LinkCard onClick={() => handleButtonClick(link.url)} key={link.id}>
            <span>{link.name}</span>
          </LinkCard>
        ))}
      </LinksContainer>
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

export default Links;
