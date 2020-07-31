//React dependencies
import React from 'react';

//Components
import WebdevBG from './../components/sections/webdev-bg';

//Styling
import './pages.scss';

//Assets
import { ReactComponent as WebdevLogo } from './../assets/svgs/webdev-logo.svg';

const Webdev = () => {
  return (
    <div className="webdev">
      <WebdevBG />

      <div className="divided-box-left">
        <WebdevLogo alt="html css js logo" />

        <div className="requirements">
          <h1>Description</h1>
          <ul>
            <li>There are 3 languages involved in web development: </li>
            <ul>
              <li>HTML - the bones/structure of the website</li>
              <li>CSS - the website's styling</li>
              <li>JavaScript - the programming language of web development which can...</li>
              <ul>
                <li>update, create & delete html & css (front-end)</li>
                <li>can calculate, manipulate & validate data (back-end)</li>
              </ul>
            </ul>

            <br />

            <li>There are 3 categories of full-stack web development: </li>
            <ul>
              <li>Client-side or front end</li>
              <li>Database technology</li>
              <li>Server-side or back end</li>
            </ul>

            <br />

            <li>There are endless strands of web development, but this website will feature: </li>
            <ul>
              <li>Basic html, css, js</li>
              <li>P5.js - graphics</li>
              <li>Full stack web development with the MERN stack</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Webdev;
