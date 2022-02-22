import React from 'react'
import './App.css'
import ParticleBackground from './background'
import NavBar from './components/navbar'
import About from './components/intro2'
import DecryptText from './components/Hero'

function App () {
  return (
    <div id='home'>
      <div className='main'>
        <ParticleBackground />
      </div>
      <NavBar />

      <Main></Main>
      {/* <About></About> */}
    </div>
  )
}

function Main () {
  return (
    <div className='main_div'>
      {/*       <div className='homePageComponents'>
                <NavBar /> */}
      <DecryptText></DecryptText>
      {/*       </div> */}
    </div>
  )
}

export default App
