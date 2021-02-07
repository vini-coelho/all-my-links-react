import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  height: 100%;
  /* background: var(--green); */
`;

export const LinksContainer = styled.div`
  background: var(--white);
  max-width: 350px;
  height: 100%;
  width: 80%;
  border-radius: 3px;

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  /* background: var(--pink); */

  animation-name: first;
  animation-duration: 600ms;
  animation-timing-function: ease-in-out;

  @keyframes first {
    from {
      opacity: 60%;
      margin-top: 30px;
    }
  }
`;

export const Name = styled.h2`
  font-family: 'Roboto';
  margin-bottom: 20px;
  font-weight: bold;
  color: var(--foreground);
  animation-name: first;
  animation-duration: 600ms;
  animation-timing-function: ease-in-out;
`;

export const LinkCard = styled.button`
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: var(--current-line);

  span {
    font-size: 1rem;
    color: var(--pink);
    font-weight: 500;
  }
  &:focus {
    outline: 0;
  }
  &:hover {
    opacity: 80%;
    cursor: pointer;
  }
`;

export const Footer = styled.footer`
  padding: 20px 0;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  /* background: var(--orange); */
  a {
    font-family: 'Roboto';
    font-size: 0.9rem;
    color: var(--foreground);
    text-decoration: none;
    margin-left: 10px;
  }

  svg {
    fill: var(--foreground);
    height: 30px;
    width: 30px;
  }
`;
