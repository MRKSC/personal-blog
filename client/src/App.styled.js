import styled from 'styled-components';

export const AppMain = styled.div`
margin: 0px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background-color: ${({ theme }) => theme.work.backGroundColorLight}
`;
