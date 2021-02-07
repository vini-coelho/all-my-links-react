import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const LoginContainer = styled.div`
  background: var(--white);
  max-width: 350px;
  height: 300px;
  width: 80%;
  border-radius: 3px;

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  animation-name: first;
  animation-duration: 600ms;
  animation-timing-function: ease-in-out;

  & > span {
    color: var(--primary);
    font-family: 'Roboto';
    font-weight: normal;
  }

  @keyframes first {
    from {
      opacity: 60%;
      margin-top: 30px;
    }
  }
`;
