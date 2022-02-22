import React, { useEffect } from 'react'
import { useDencrypt } from 'use-dencrypt-effect'
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons'
import { HeroWrapper, HeroText, SubHeroText, AkshaySpan, SocialsDiv, SpotifyWrapper, values } from './styles/herostyles';
function DecryptText () {
  const { result, dencrypt } = useDencrypt()
  useEffect(() => {
    let i = 0
    const action = setInterval(() => {
      dencrypt(values[i])
      i = i === values.length - 1 ? (i = 0) : i + 1
    }, 2000)
    return () => clearInterval(action)
  }, [])
  return (
    <div>
    <HeroWrapper>
      <HeroText>
        Hey! I'm <AkshaySpan>Akshay!</AkshaySpan>
      </HeroText>
      <SubHeroText>{result}</SubHeroText>
      <SocialsDiv>
        <SocialIcon network="email" url="akshay.bhatia@uwaterloo.ca"/>
        <SocialIcon url='https://www.facebook.com/akshay.bhatia.1422409/'></SocialIcon>
        <SocialIcon url='https://www.reddit.com/user/AKSHAY_2604'></SocialIcon>
        <SocialIcon url='https://twitter.com/Akshay_2604'></SocialIcon>
        <SocialIcon url='https://www.instagram.com/akshay__2604/'></SocialIcon>

      </SocialsDiv>
    </HeroWrapper>

    </div>

  )
}

export default DecryptText
