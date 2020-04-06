import styled from 'styled-components';
import errorBg from '../../../../assets/images/404-page/404-bg.png';

export const MainContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
height: 100vh;
background-color: white;
background-repeat: no-repeat;
background-size: cover;
`;

export const ContentBg = styled.div`
width: 1920px;
height: 1080px;
background-image: url("${errorBg}");
`;
