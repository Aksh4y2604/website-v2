import React, { useEffect } from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Page2, Container,ProfilePic, IntroSection, Head1, Content, ImageDiv, ContentDiv } from './styles/introstyles.js';
import { Grid, List, ListItem, Divider, ListItemText } from '@mui/material';
import { Typography } from '@material-ui/core';

function About () {
  useEffect(() => {
    Aos.init({})
  }, [])
  return (
    <Page2 id='About'>
        <Container>
        <Grid container spacing={2} columns={16}>
            <Grid item xs={16} md={8}>

                    <ProfilePic data-aos='fade-down' src="https://imgur.com/hmDnidn.jpg"/>

            </Grid>
            <Grid item xs={16} md={8} data-aos="fade-up">
                    <Typography variant="h1" component="h1" align="left">I am ...</Typography>
                    <Content>
                    <List  component="nav" aria-label="mailbox folders">
                        <ListItem button>
                            <ListItemText primary="a ambitious young guy who loves to explore the world and build things that make a difference." />
                        </ListItem>
                        <Divider />
                        <ListItem button divider>
                            <ListItemText primary="an individual with  an entrepreneurial mindset. " />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="I am always looking for new challenges to tackle and build stuff to make a difference." />
                        </ListItem>
                        <Divider light />
                    </List>
                    </Content>
            </Grid>
        </Grid>
        </Container>
    </Page2>
  )
}

export default About
