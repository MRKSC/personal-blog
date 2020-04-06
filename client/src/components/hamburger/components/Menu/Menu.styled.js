import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
  height: 100vh;
  width: 100%;
  z-index: 1;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  overflow: hidden;

  a {
    font-size: 7rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

     @media (max-width: ${({ theme }) => theme.tablet}) {
      font-size: 3rem;
    }
      @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
