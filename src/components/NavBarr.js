import React from 'react'
import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'

const Container = styled.div`
  width: 80vw;
  margin: 0 10vw;
  height: 15vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled(LinkS)`
  text-align: center;
  color: black;
  font-size: 2rem;
  font-family: poppins;
  font-weight: bold;
`
const LinksContainer = styled.div`
  display: flex;
  width: 30vw;
  align-items: center;
  justify-content: space-between;
`
const Links = styled(LinkS)`
  text-decoration: none;
  padding: 0.5rem;
  font-size: 1.8rem;
  font-weight: normal;
  font-family: poppins;
  color: black;
  cursor: pointer;
`

function NavBarr () {
  return (
    <Container>
      <Logo to='home'>Logo</Logo>
      <LinksContainer>
        <Links to='About' spy={true} smooth={true}>
          About
        </Links>
        <Links to='about' spy={true} smooth={true}>
          Projects
        </Links>
        <Links to='about' spy={true} smooth={true}>
          Contact
        </Links>
      </LinksContainer>
    </Container>
  )
}

export default NavBarr
