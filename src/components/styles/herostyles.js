import React from "react";
import styled from "styled-components";

const values = [
    'a Tech-Enthusiast',
    'a Designer',
    'a Full-Stack-Developer',
    'a creator',
    'a gamer',
  ]
  const HeroWrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-family: Roboto;
  `
  const HeroText = styled.div`
    font-weight: 800;
/*     font-family: Poppins, monospace; */
    font-family: Roboto, sans-serif;
    color: #2c3e50;
    font-size: 5rem;
    @media (max-width: 1154px) {
      font-size: 3rem;
      margin: 0 3rem;
    }
  `
  const SubHeroText = styled.h2`
  font-family: Roboto, monospace;
    font-weight: normal;
    color: #2c3e50;
    font-size: 3rem;
    @media (max-width: 1154px) {
      font-size: 3rem;
    }
    @media (max-width: 767px) {
        font-size: 2rem;
    }
    @media (max-width: 576px) {
        font-size: 1.5rem;
    }

  `
  const AkshaySpan = styled.span`
    font-family: Roboto, sans-serif;
    color: #fd6f02;
    font-size: 6.5rem;
    font-weight: 800;
    @media (max-width: 1154px) {
      font-size: 5rem;
    }
    @media (max-width: 767px) {
        font-size: 4rem;
    }
    @media (max-width: 576px) {
        font-size: 3rem;
    }


  `
  const SocialsDiv = styled.div`
    display: flex;
    width: 30vw;
    height: 3rem;
    margin: 1rem 40vw;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    padding: 0 3rem;
    @media (max-width: 1154px) {
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
    }
    @media (max-width: 767px) {
        display: none;
    }


  `
  const SpotifyWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 3rem;
    margin: 1rem 40vw;
    padding: 0 3rem
  `;
  
export { HeroWrapper, HeroText, SubHeroText, AkshaySpan, SocialsDiv, SpotifyWrapper, values };