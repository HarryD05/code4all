//React dependencies
import React from 'react';

//Styling
import './tutorials.scss';

const Graphics = props => {
  return (
    <div className="tutorial" id="webdev2">
      <h1>Graphics with p5.js</h1>

      <ul>
        <li>Setting up the environment</li>
        <li>Shapes</li>
        <li>Colours & stroke</li>
        <li>Movement, collisions & 'bouncing'</li>
        <li>Classes</li>
        <li>Mouse events</li>
        <li>Keyboard events</li>
        <li>Perlin noise</li>
        <li>Basic physics</li>
        <li>Basic game - pong</li>
        <li>Project Ideas</li>
      </ul>
    </div>
  )
}

export default Graphics;