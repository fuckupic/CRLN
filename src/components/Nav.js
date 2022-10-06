import React from 'react'

const Nav = () => {
  return (
    <div className="wrapper absolute h-20 z-50  w-screen top-0 bg-gradient-to-b from-gray-900">
      <nav className="relative flex justify-between items-center w-screen max-w-screen-xl">
        <img src="SVG/logo-horizontal.svg" alt="" className="logo" />
        <div className="flex flex-row  items-center gap-10 uppercase font-bold tracking-widest text-white">
          <h1>Strategy</h1>
          <h1>Work</h1>
          <h1>People</h1>
          <span className=" cursor-pointer lowercase bg-white w-8 h-8 rounded-full flex items-center justify-center text-black">
            i
          </span>
        </div>
      </nav>
    </div>
  )
}

export default Nav
