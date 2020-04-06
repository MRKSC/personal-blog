import React from 'react';
import { ThemeProvider } from 'styled-components';
import './landing.style.scss';
import { theme } from './landing.theme';
import {
  PageContainer,
  PageInnerContainer,
  HeadingArea,
  MainHeadingContainer,
  HeadingH1,
  HeadingH4,
  ButtonContainer,
  DownloadCwButton,
} from './Landing.styled';

const Landing = () => (
  <ThemeProvider theme={theme}>
    <PageContainer>
      <PageInnerContainer>
        <HeadingArea>
          <MainHeadingContainer>
            <HeadingH1 className="style">
                            MRKSC
            </HeadingH1>
            <HeadingH4>
                            Freelance Developer
            </HeadingH4>
          </MainHeadingContainer>
          <ButtonContainer>
            <DownloadCwButton target="_blank" href="https://drive.google.com/drive/folders/1sUeVPNULZR3LYDfrwFV2kuXVrZqPQuMp?usp=sharing">CV FILES DRIVE</DownloadCwButton>
          </ButtonContainer>
        </HeadingArea>
      </PageInnerContainer>
    </PageContainer>
  </ThemeProvider>
);

export default Landing;
