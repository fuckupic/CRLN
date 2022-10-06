import React from 'react'

const HeroBackgrounds = ({ background, btnClick }) => {
  return (
    <div className="absolute w-screen h-screen z-0 top-0 left-0 overflow-hidden flex flex-col items-center justify-center bg-gradient-radial from-[#ffce00] to-black ">
      <img
        className="absolute left-0 bottom-50 w-full h-full opacity-50"
        src={`${background[btnClick]}.jpeg`}
      />
      <img
        className="h-96 mask mask-circle"
        src={`${background[btnClick]}.gif`}
        alt=""
      />
    </div>
  )
}

export default HeroBackgrounds
