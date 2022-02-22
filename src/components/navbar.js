import React, { useEffect, useState } from 'react'
/* import { Typography, Grid, Button } from '@material-ui/core' */
/* import { slide as Menu } from 'react-burger-menu' */
import Hamburger from 'hamburger-react'
import { Link as LinkS } from 'react-scroll'

import styled, { keyframes } from 'styled-components'


var color = '#2c3e50'
const SlideAnimation = keyframes`
  0% { opacity: 0; -webkit-transform: translatex(100%); }   
  70% { opacity: 1; -webkit-transform: translateX(0); }
`


var NavWrapper = styled.div`
  display: flex;
  position: fixed;
  z-index: 6;
  color: ${color};
  width: 90vw;
  margin: 0 5vw;
  justify-content: space-between;
  align-items: center;
`
const NavLink = styled(LinkS)`
  font-family: Roboto, sans-serif;
  text-decoration: none;
  color: ${color};
  text-align: center;
  font-size: 1.2rem;
  padding: 0.5rem;
  cursor: pointer;
  border: 2px transparent;
  &:hover {
    transition: all 0.2s ease-in-out;
    border-bottom: 2px #fd6f02;
  }
`
const NavLogo = styled.h3`
  font-family: Roboto, sans-serif;

  font-size: 2rem;
  @media (max-width: 1154px) {
    font-size: 1.5rem;
    color: ${color};
  }
  &:hover {
    color: #fd6f02;
  }
`
const Navcomponent = styled.h4`
  font-family: Roboto, sans-serif;
  font-weight: normal;
  font-size: 1.5rem;
  padding: 0 0.5rem;
  @media (max-width: 1154px) {
    display: none;
  }
`
const HamBurgerMenu = styled.button`
  display: none;
  @media (max-width: 1154px) {
    display: block;
    background: transparent;
    border: none;
    cursor: pointer;
  }
`

const NavComponentWrapper = styled.div`
  display: flex;
`
const MobileWrapper = styled.div`
  position: absolute;
  text-align: center;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 3;
  right: 0;
  background-color: #f5f6fa;
  animation-name: ${SlideAnimation};
  animation-duration: 1s;

  text-align: center;
  padding-top: 10%;

  @media (min-width: 1154px) {
    display: none;
  }
`
const MobileNavcomponent = styled.h4`
  font-family: Roboto, sans-serif;
  font-weight: normal;
  font-size: 1.5rem;
  padding: 0 0.5rem;
  color: #2c3e50;
  z-index: 2;
  &:hover {
    color: #fd6f02;
  }
`


function MobileView ({ setOpen, isOpen }) {
  return (
    <MobileWrapper>
      <NavLink to='About' spy={true} smooth={true}>
        <MobileNavcomponent>About</MobileNavcomponent>
      </NavLink>
      <NavLink to='About' spy={true} smooth={true}>
        <MobileNavcomponent> Projects </MobileNavcomponent>
      </NavLink>

      <NavLink to='About' spy={true} smooth={true}>
        <MobileNavcomponent> Contact </MobileNavcomponent>
      </NavLink>
    </MobileWrapper>
  )
}
function NavBar () {
  const [isOpen, setOpen] = useState(false)

  return (
    <div>
      <NavWrapper>
        <NavLink to='home' spy={true} smooth={true}>
          <NavLogo> Logo </NavLogo>
        </NavLink>
        <NavComponentWrapper>
          <NavLink to='About' spy={true} smooth={true}>
            <Navcomponent>About</Navcomponent>
          </NavLink>
          <NavLink>
            <Navcomponent> Projects </Navcomponent>
          </NavLink>
          <NavLink>
            <Navcomponent> Contact </Navcomponent>
          </NavLink>
        </NavComponentWrapper>

        <HamBurgerMenu>
          <LinkS to='home' spy={true} smooth={true}>
            <Hamburger
              rounded
              color='#2c3e50'
              onToggle={() => {
                setOpen(!isOpen)

                console.log(isOpen)

                isOpen ? (color = 'white') : (color = '#2c3e50')
                console.log(color)
              }}
            />
          </LinkS>
        </HamBurgerMenu>
      </NavWrapper>
      {isOpen && <MobileView setOpen={setOpen} isOpen={isOpen} />}
    </div>
  )
}

export default NavBar
