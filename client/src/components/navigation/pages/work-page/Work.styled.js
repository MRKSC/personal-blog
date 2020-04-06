import styled from 'styled-components';

export const SingleLink = styled.a`
text-decoration: none;
color: ${({theme}) => theme.work.headingColorLight}
transition: 0.3s;
:hover { color: #ffeeac;
}
`;

export const CenteringContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const PageContainer = styled.div`
max-width: 1920px;
`;

export const MainContainer = styled.div`
width: 100%;
margin: auto;
color: ${({ theme }) => theme.work.textColorLight}
`;

export const HeadingContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
align-items: center;
width: 100%;
`;

export const MainHeading = styled.h1`
font-size: 60px;
display: inline-block;
white-space: nowrap;
font-weight: bold;
@media only screen and (max-width: 800px) {
font-size: 25px;
width: 100%;
text-align: center;
}
@media only screen and (max-width: 1650px) {
font-size: 30px;
}
`;

export const MobileImage = styled.div`
width: 98%;
height: auto;
max-width: 800px;
margin: 0 auto; /* to center the container */
display: none;
@media only screen and (max-width: 800px) and (min-height: 800px){
flex-direction: column;
justify-content: space-between;
margin-top: 20px;
display:initial;
}
`;


export const InnerContainer = styled.div`
width: 100%;
display: flex;
margin-top: 100px;
flex-direction: row;
justify-content: space-between;
align-items: center;

@media only screen and (max-width: 1650px){
flex-direction: column;
justify-content: space-between;
margin-top: 20px;
}

`;

export const InnerLeft = styled.div`
width: 800px;
min-width: 800px;
height: 481px;
border: solid 8px rgba(247,202,155,0.64);
border-radius: 5px 5px 5px 40px;
-webkit-box-shadow: 10px 10px 22px -8px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 22px -8px rgba(0,0,0,0.75);
box-shadow: 10px 10px 22px -8px rgba(0,0,0,0.75);

@media only screen and (max-width: 800px) {
display:none;
}

@media only screen and (max-width: 1650px) and (min-width: 800px) {
height: 481px;
width: auto;
border-radius: initial;
-webkit-box-shadow: initial;
-moz-box-shadow: initial;
box-shadow: initial;
}

@media only screen and (max-height: 800px) {
display: none;
}
`;

export const InnerRight = styled.div`
width: 100%;
min-height: 491px;
min-width: 800px;
@media only screen and (max-width: 800px) {
width: 100%;
min-width: initial;
text-align: center;
min-height: initial;
}
@media only screen and (max-width: 1650px) {
min-height: initial;
}
`;

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
min-height: 491px;
max-width: 750px;
min-width: 750px;
padding-left: 35px;
padding-right: 35px;

@media only screen and (max-width: 1650px) {
padding-left: 20px;
min-width: initial;
padding-right: 20px;
min-height: initial;
}
`;


export const ShareBoxContainer = styled.div`
min-width: 50%;
display: flex;
flex-direction: row;
justify-content: center;
@media only screen and (max-width: 800px) {
min-width: initial;
}
`;

export const ShareBoxInnerContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-end;

`;

export const BoxOne = styled.div`

`;

export const SocialButton = styled.a`
margin: 5px;
width: 95px;
padding: 10px 28px 10px 28px;
background: #131313;
color: white;
border: none;
border-radius: 5px;
display: inline-block;
cursor: pointer;
font-size: 18px;
font-weight: 600;
text-decoration: none;
text-align: center;
`;

export const BoxTwo = styled.div`

`;

export const BoxThree = styled.div`

`;


export const Author = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
@media only screen and (max-width: 1650px) {
padding-left: 0px;
min-width: initial;
flex-direction: column;
display: none;
}

`;

export const AuthorContainer = styled.div`
display: flex;
flex-wrap: nowrap;
`;

export const Publicated = styled.div`

`;

export const AuthorName = styled.div`
padding-left: 25px;
`;

export const Date = styled.h3`

`;

export const Name = styled.h3`

`;


export const Heading = styled.div`

`;

export const Link = styled.div`

`;

export const Content = styled.div`

`;
export const HeadingContent = styled.h1`
margin-top: 0px;
font-size: 40px;
@media only screen and (max-width: 1650px) {
font-size: 20px;
}
@media only screen and (max-width: 1650px) {
padding-top: 20px;
}

`;
export const LinkContent = styled.a`
font-size: 20px;
text-decoration: none;
color: ${({ theme }) => theme.work.linkColorLight};
`;

export const ContentContent = styled.p`
font-size: 18px;
@media only screen and (max-width: 1650px) {
{
font-size: 15px;
}
`;

export const Separator = styled.div`
width: 100%;
margin-left: 25px;
background-color: black;
height: 0px;
border: 3px solid ${({ theme }) => theme.work.textColorLight};
@media only screen and (max-width: 800px) {
display: none;
}
`;

export const Skills = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
margin: 35px 0px 35px 0px;

@media only screen and (max-width: 800px) {
padding: 0px 20px 0px 20px;
justify-content: center;
margin: 0px;
}
`;
