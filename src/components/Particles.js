import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const ParticlesStuff = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine)
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container)
  }, [])

  return (
    <Particles
      id="particles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: false,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ffce00',
          },
          collisions: {
            enable: false,
          },
          move: {
            directions: 'none',
            enable: true,
            outModes: {
              default: 'out',
            },
            random: true,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 400,
            },
            value: 80,
          },
          opacity: {
            value: 0.25,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 0.01, max: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default ParticlesStuff
