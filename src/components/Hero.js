import React, { useEffect, useRef, useState } from 'react'
import HeroBackgrounds from './HeroBackgrounds'

const Hero = () => {
  const background = [null, 'mordor', 'wheel', 'planet', 'hypnosis', 'eye']
  const [btnClick, setBtnClick] = useState(0)

  const handleClick = () => {
    if (btnClick === background.length - 1) {
      setBtnClick(1)
    } else {
      setBtnClick((prevValue) => prevValue + 1)
    }
  }

  return (
    <div>
      <div className=" wrapper max-width flex flex-col items-center text-center justify-center">
        <div className="flex  flex-col items-center gap-8 relative z-10">
          <h1 className=" text-8xl font-black text-white">
            Transforming <i>brands</i>
            <br />
            to power up their <i>stories</i>
          </h1>
          <div className="flex flex-row gap-8">
            <div className="indicator">
              <span className="indicator-item badge badge-primary"></span>
              <button
                className="btn btn-neutral"
                onClick={() => {
                  handleClick()
                }}
              >
                transform
              </button>
            </div>
            <button className="btn btn-neutral">Transform us</button>
          </div>
        </div>
        <img className="absolute w-96 z-[1]" src="SVG/circle.svg" alt="" />
      </div>

      <HeroBackgrounds background={background} btnClick={btnClick} />
    </div>
  )
}

export default Hero
