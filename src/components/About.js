import React from 'react'
import { StyledContainer, StyledParagraph } from '../styled'
import GitHubIcon from '@material-ui/icons/GitHub';

const About = () => (
  <StyledContainer>
    <h1>About this app</h1>
    <StyledParagraph>This project was developed for a job test.</StyledParagraph>
    <StyledParagraph>
      It uses React-Redux and Material-UI, and might be used as boilerplate for SPA projects in general.
    </StyledParagraph>
    <StyledParagraph>
      Built from scratch in a dozen hours.
      </StyledParagraph>
    <StyledParagraph style={{ color: 'green', marginTop: '1.2em' }}>
      <a href="https://github.com/pedro-surf" rel="noopener noreferrer" target="_blank">
       <GitHubIcon /> @pedro-surf
        </a>
        </StyledParagraph>
    <StyledParagraph>Nov, 2020</StyledParagraph>
  </StyledContainer>
)

export default About