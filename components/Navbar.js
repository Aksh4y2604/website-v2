import React, { useEffect, useState } from 'react'
import Hamburger from 'hamburger-react'
import { Link as LinkS } from 'react-scroll'
import {
  NavWrapper,
  NavLink,
  NavLogo,
  Navcomponent,
  HamBurgerMenu,
  NavComponentWrapper,
  MobileWrapper,
  MobileNavcomponent
} from './styles/Nav'

var color = '#2c3e50'

function MobileView () {
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
export { color }
