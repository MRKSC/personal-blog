import styled from 'styled-components';
import landingBg from '../../../../assets/images/backgrounds/arrow-bg-two.png';

export const PageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
overflow: hidden;
width: 100%;
height: 100vh;
background-image: url("${landingBg}");
background-size:cover;
`;

export const PageInnerContainer = styled.div`
width: 100%;
`;

export const HeadingArea = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const MainHeadingContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
font-size: 4em;
font-weight: bold;
color:#222222;;
`;

export const HeadingH1 = styled.h1`
margin-top: 0;
margin-bottom: 25px;
@media only screen and (max-width: 800px) {
    font-size: 25px;
    margin-bottom: 0px;
  }
  @media only screen and (max-height: 500px) {
    font-size: 25px;
    margin-bottom: 0px;
  }
`;

export const HeadingH4 = styled.h4`
margin-top: 0;
margin-bottom: 25px;
@media only screen and (max-width: 800px) {
    font-size: 20px;
    margin-bottom: 0px;
  }
    @media only screen and (max-height: 500px) {
    font-size: 20px;
    margin-bottom: 0px;
  }
`;

export const ButtonContainer = styled.div`
padding: 5px;
margin-top: 20px;
  @media only screen and (max-width: 800px) {
  margin-top: 5px;
  }
`;

export const DownloadCwButton = styled.a`
    margin: 5px;
    width: 165px;
    height: 46px;
    padding: 24px 28px 0px 28px;
    background: #222222;
    color: white;
    border: none;
    border-radius: 50px;
    display: inline-block;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
  text-decoration: none;
  text-align: center;
  transition: 0.3s;
  :hover{
    background-color: #8d363a;
  }
  @media only screen and (max-width: 800px) {
   padding: 11px 28px 5px 28px;
   font-size: 12px;
    width: 90px;
    height: 20px;
  }
    @media only screen and (max-height: 500px) {
   padding: 11px 28px 5px 28px;
   font-size: 12px;
    width: 90px;
    height: 20px;
  }
`;
