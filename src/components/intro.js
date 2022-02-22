import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Typography, Card, Grid } from '@material-ui/core'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Page2, Container,ProfilePic, IntroSection, Head1, Content, ImageDiv, ContentDiv } from './styles/introstyles.js';

function About () {
  useEffect(() => {
    Aos.init({})
  }, [])
  return (
    <Page2 id='About'>
      <Container>
        <IntroSection >
          <ImageDiv data-aos='fade-down'>
            <ProfilePic src="https://imgur.com/hmDnidn.jpg"/>
            
          </ImageDiv>
          <ContentDiv data-aos="fade-up" >
            <Head1>I am ...</Head1>
            <Content>
              <li>a ambitious young guy who loves to explore the world and build things that make a difference.</li>
                <li>an individual with  an entrepreneurial mindset. </li>
                <li>I am always looking for new challenges to tackle and build stuff to make a difference.</li>

            </Content>
          </ContentDiv>
        </IntroSection>
      </Container>
    </Page2>
  )
}

export default About
