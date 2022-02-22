import React from "react";

import styled from "styled-components";


const Page2 = styled.div`
  position: absolute;
  top: 100%;
  height: 100%;

  width: 100%;
  text-align: center;
  font-family: Roboto, sans-serif;
  align-items: center;
`
const Container = styled.div`
  position: absolute;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: Roboto, sans-serif;
  width: 100%;
  position: relative;
  align-items: center;
`
const ProfilePic = styled.img`
  height: 20rem;
  width: 20rem;
  object-fit: cover;
  object-position: center;
  @media (max-width: 767px) {
    height: 20rem;
    width: 20rem;
  }
  @media (max-width: 576px) {
    height: 15rem;
    width: 15rem;
  }
  @media (max-width: 375px) {
    height: 15rem;
    width: 15rem;
  }

`



const IntroSection = styled.section`

  position: absolute;
  height: 80vh;
  width: 80vw;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  display: flex;
  justify-content: space-around;

  @media (max-width: 1154px) {
    flex-direction: column;
    background-color: transparent;
    align-items: justify;
  }
  @media (max-width: 767px) {
    height: 50vh;
    width: 100vw;
  }

`
const Head1 = styled.h2`
  text-align: left;
  font-family: Roboto, sans-serif;
  color: #fd6f02;
  font-size: 5rem;
  font-weight: bolder;
  @media (max-width: 1154px) {
    font-size: 3.5rem;
    text-align: center;
  }
  @media (max-width: 767px) {
    font-size: 2.5rem;
  }

`
const Content = styled.p`
  font-family: Roboto, sans-serif;
  text-align: left;
  color: #2c3e50;
  font-size: 1.5rem;
  @media (max-width: 1154px) {
    text-align: left;
    font-size: 1.5rem;
  }
  @media (max-width: 767px) {
    font-size: 1.2rem;
  }

`
const ImageDiv = styled.div`
  position: relative;
  height: 40vh;
  width: 40vw;
  margin: 0 5rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 1154px) {
    height: 50vh;
    width: 50vw;
  }

  @media (max-width: 767px) {
    height: 30vh;
    margin-bottom: 3rem;
    width: 100vw;
  }
  @media (max-width: 576px) {
    height: 30vh;
    margin-bottom: 3rem;
    width: 100vw;
  }
`
const ContentDiv = styled.div`
  align-items: center;
  margin-top:2rem ;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 1rem;
  margin: 1rem;
  margin : 0 3rem;
  @media (max-width: 1154px) {
    text-align: center;
    align-items: center;
  }
`

export { ProfilePic, Page2, Container, IntroSection, Head1, Content, ImageDiv, ContentDiv };