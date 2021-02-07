import React from 'react';

import { Container, LoginContainer } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <LoginContainer>
        <span>Login to your account</span>
        <form>
          <input type='text' placeholder='alo' />
        </form>
      </LoginContainer>
    </Container>
  );
};

export default Login;
