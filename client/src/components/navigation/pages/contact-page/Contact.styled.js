import styled from 'styled-components';
import contactBg from '../../../../assets/images/contact/contact-bg.png';


// -------------------------- Page layout style------------------------
export const BgContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
height: 100vh;
background-image: url("${contactBg}");
background-repeat: no-repeat;
background-size: cover;

@media only screen and (max-width: 1600px) {
    height: 100%;
  }
`;

export const PageContainer = styled.div`
width: 100%;
max-width: 1920px;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
@media only screen and (max-width: 600px) {
    padding: 50px 0px 50px 0px;
  }
      @media only screen and (max-height: 900px) {
    height: 100%;
  }


`;

export const InnerContainer = styled.div`
max-width: 1920px;
display: flex;
justify-content: space-around;


`;

export const HeadingContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
  @media only screen and (max-width: 1600px) {
    padding-top: 100px;
  }
`;

export const HeadingInnerContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 45px;
color: #222222;

`;

export const HeadingMainDiv = styled.div`

`;

export const HeadingOne = styled.h1`
font-size: 55px;
margin-bottom: 0px;
font-weight: 900;
text-align: center;
@media only screen and (max-width: 600px) {
   {
    font-size: 30px;
    
  }

`;

export const HeadingTwo = styled.h3`
@media only screen and (max-width: 600px) {
visibility: hidden;
}
`;


export const HeadingSecondDiv = styled.div`

`;

export const ContentContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 50%;
`;

export const ContentInnerContainer = styled.div`

`;


export const AlertContainer = styled.div`
color: black;
background-color : ${(props) => (props.isSended ? '#00FF9B' : '#F6FF00')};
min-width: 400px;
text-align: center;
font-size: 15px;
margin-top: 25px;
padding: 0px 45px 0px 45px;
border-radius: 35px;
@media only screen and (max-width: 600px) {
  min-width: initial;
  font-size: 10px;
  width: 70%;
  
`;


// -------------------------- form design------------------------
export const ContactFormContainer = styled.div`
width: 50%;
height: 100%;
@media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const ContactFormInnerContainer = styled.div`
height: 100%;
`;

export const ContactForm = styled.form`
height: 100%;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

export const Label = styled.label`

`;


export const Input = styled.input`
padding: 0 0 0 10px;
font-size: 19px;
height: 50px;
color: #000000;
background: #ffffff;
border: none;
border-radius: 3px;
width: 100%;
margin-bottom: 0.5em;
`;
export const TextArea = styled.textarea`
padding: 12px 0 0 10px;
font-size: 19px;
font-family: 'Roboto', sans-serif;
height: 50px;
color: #000000;
background: #ffffff;
border: none;
border-radius: 3px;
width: 100%;
margin-bottom: 0.5em;
`;


export const SubmitButton = styled.button`
  width: 160px;
  margin-top: 15px;
  padding: 10px 28px 10px 28px;
  background: #131313;
  color: white;
  border: none;
  border-radius: 3px;
  display: inline-block;
  cursor: pointer;
  font-size: 25px;
  font-weight: 600;
  text-decoration: none;
  @media only screen and (max-width: 1600px) {
    background: #f1be78;
    color: #1c0031;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
 @media only screen and (max-width: 1600px) {
    padding-bottom: 100px;
  }
`;
