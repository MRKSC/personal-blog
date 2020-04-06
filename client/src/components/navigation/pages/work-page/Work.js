import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactFullpage from '@fullpage/react-fullpage';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import projectData from './Portfolio/portfolioData';
import './work.style.scss';
import './Small-image-slider/SmallSlider';
import { NavLink } from 'react-router-dom';
import {
  SingleLink,
  PageContainer,
  MainContainer,
  HeadingContainer,
  MainHeading,
  InnerContainer,
  InnerLeft,
  InnerRight,
  ShareBoxContainer,
  ShareBoxInnerContainer,
  BoxOne,
  BoxTwo,
  BoxThree,
  TextContainer,
  Author,
  AuthorContainer,
  Publicated,
  AuthorName,
  Date,
  Name,
  HeadingContent,
  LinkContent,
  ContentContent,
  Heading,
  Content,
  SocialButton,
  CenteringContainer,
  Separator,
  Skills,
  MobileImage,
} from './Work.styled';

import {
  IconNode,
  IconReact,
  IconWordpress,
  IconServer,
  IconDatabase,
  IconJavascript,
  IconGoogle,
  IconCss,
} from './Work.icons.styled';


const ProjectGenerator = projectData.map((project) => (
  <div className="section port-bg-style">
    <CenteringContainer>
      <PageContainer>
        <MainContainer>
          <HeadingContainer>
            <MainHeading>
              <NavLink style={{ textDecoration: 'none' }} to={`/${project.localURL}`}><SingleLink>{project.heading}</SingleLink></NavLink>
            </MainHeading>
            <Separator />
          </HeadingContainer>
          <InnerContainer>
            <MobileImage>
              <img src={require(`../../../../assets/images/work/portfolio-thumbnails/${project.thumbnail}`)} alt="img" height="481px" width="800px" className={`img${project.id} imgtest`} />
            </MobileImage>
            <InnerLeft className={`img${project.id}`} />
            <InnerRight>
              <TextContainer>
                <Heading>
                  <HeadingContent>
                    <FontAwesomeIcon icon={faChevronRight} className="fa-style" />
                    {project.subHeading}
                  </HeadingContent>
                  <LinkContent target="_blank" href={`${project.url}`}>
                    {project.url}
                  </LinkContent>
                  <Content>
                    <ContentContent>{project.excerpt}</ContentContent>
                  </Content>
                </Heading>
                <Skills>
                  {project.skills.node.length === 0 ? <div /> : <IconNode className="fa-padding-left" /> }
                  {project.skills.react.length === 0 ? <div /> : <IconReact className="fa-padding-left" />}
                  {project.skills.wordpress.length === 0 ? <div /> : <IconWordpress className="fa-padding-left" />}
                  {project.skills.server.length === 0 ? <div /> : <IconServer className="fa-padding-left" /> }
                  {project.skills.database.length === 0 ? <div /> : <IconDatabase className="fa-padding-left" />}
                  {project.skills.javascript.length === 0 ? <div /> : <IconJavascript className="fa-padding-left" />}
                  {project.skills.google.length === 0 ? <div /> : <IconGoogle className="fa-padding-left" /> }
                  {project.skills.css.length === 0 ? <div /> : <IconCss className="fa-padding-left" />}
                </Skills>
                <Author>
                  <AuthorContainer>
                    <Publicated>
                      <Date>
Published :
                        {project.published}
                      </Date>
                    </Publicated>
                    <AuthorName>
                      <Name>
Author :
                        {project.author}
                      </Name>
                    </AuthorName>
                  </AuthorContainer>
                  <ShareBoxContainer>
                    <ShareBoxInnerContainer>
                      <BoxOne>
                        {project.github.length === 0 ? <div /> : <SocialButton target="_blank" href={`${project.github}`}>Github</SocialButton> }
                      </BoxOne>
                      <BoxTwo>
                        {project.linkedin.length === 0 ? <div /> : <SocialButton target="_blank" href={`${project.linkedin}`}>LinkedIn</SocialButton> }
                      </BoxTwo>
                      <BoxThree />
                    </ShareBoxInnerContainer>
                  </ShareBoxContainer>
                </Author>
              </TextContainer>
            </InnerRight>
          </InnerContainer>
        </MainContainer>
      </PageContainer>
    </CenteringContainer>
  </div>
));

const Fullpage = () => (
  <ReactFullpage
        // fullpage options
    licenseKey="YOUR_KEY_HERE"
    scrollingSpeed={1000} /* Options here */
    navigation

    render={({ state }) => (
      <ReactFullpage.Wrapper>
        {ProjectGenerator}
      </ReactFullpage.Wrapper>
    )}
  />
);

export default Fullpage;
