import React from 'react';
import styled from 'styled-components';

export const Content = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
width: 100%;
text-align: center
`;

export const H1 = styled.p`
color: white;
font-size: 45px;
`;


function wordpressPortfolioPage() {
  return (
    <Content>
      <H1>Wordpress App. This sub-page is under construction</H1>

    </Content>
  );
}

export default wordpressPortfolioPage;
