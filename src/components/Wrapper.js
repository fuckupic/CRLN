import React from 'react'

import Hero from './Hero'
import Nav from './Nav'
import Projects from './Projects'
import ParticlesStuff from './Particles'

const Wrapper = () => {
  return (
    <div className="relative flex flex-col items-center justify-center font-proxima">
      <Nav />
      <Hero />
      {/* <Projects /> */}
      <ParticlesStuff />
    </div>
  )
}

export default Wrapper
