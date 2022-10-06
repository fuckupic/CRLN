import React from 'react'
import ReactPlayer from 'react-player'

const Projects = () => {
  return (
    <div className="wrapper">
      <div className="flex flex-col">
        <h3>Our Work</h3>
        <h2>That's what we do</h2>
      </div>
      <div>
        <ReactPlayer url="https://youtu.be/wg7w2BX5HB4" />
      </div>
    </div>
  )
}

export default Projects
