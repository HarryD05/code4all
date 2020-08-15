//React dependencies
import React from 'react';

//Styling
import './tutorials.scss';

const FullStack = props => {
  return (
    <div className="tutorial" id="webdev3">
      <h1>Full Stack Development (with the MERN stack)</h1>

      <ul>
        <li>Installing prerequisites</li>
        <li>React basics</li>
        <li>React router</li>
        <li>React hooks</li>
        <li>Express</li>
        <li>Connecting to an API</li>
        <li>MongoDB & Mongoose</li>
        <li>Connecting the backend & frontend</li>
        <li>Example project - To Do app</li>
        <li>Next steps (other resources)</li>
      </ul>
    </div>
  )
}

export default FullStack;