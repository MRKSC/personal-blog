import React from 'react';
import styled from 'styled-components';

export const Content = styled.div`
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
text-align: center
`;

export const H1 = styled.p`
color: white;
font-size: 45px;
`;

function CarApp() {
  return (
    <Content>
      <H1>Car App. This sub-page is under construction</H1>

    </Content>
  );
}

export default CarApp;
