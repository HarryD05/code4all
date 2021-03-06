//React dependencies
import React, { useContext } from 'react';

//Components
import WebdevBG from './../components/sections/webdev-bg';
import TutorialBG from './../components/sections/tutorials-bg';
import HashLink from './../components/navigation/HashLink';

//Tutorials
import WebBasics from './../components/tutorials/web-basics';
import Graphics from './../components/tutorials/p5-basics';
import FullStack from './../components/tutorials/full-stack';

//Context
import { LocationContext } from './../context/LocationContext';

//Styling
import './pages.scss';

//Assets
import { ReactComponent as WebdevLogo } from './../assets/svgs/webdev-logo.svg';
import { ReactComponent as Requirements } from './../assets/svgs/requirements.svg';
import { ReactComponent as Tutorial } from './../assets/svgs/tutorial.svg';

const Webdev = () => {
  const locContext = useContext(LocationContext);
  locContext.setCurrent('webdev');

  return (
    <div className="webdev">
      <WebdevBG />

      <div id="desc">
        <div className="divided-box-left">
          <WebdevLogo alt="html css/js/logo" />

          <div className="requirements">
            <h1>Description</h1>
            <ul>
              <li>There are 3 languages involved in web development: </li>
              <ul>
                <li><b>HTML</b> - the bones/structure of the website</li>
                <li><b>CSS</b> - the website's styling</li>
                <li><b>JavaScript</b> - the programming language of web development which can...</li>
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

              <li>Web development is a very popular form of programming, the results of code are easily accessible for anyone with the internet & no downloads are required</li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div id="requirements">
        <div className="divided-box-right">
          <div className="requirements">
            <h1>Requirements</h1>
            <p>There are 3 technologies used in this tutorial (all free)</p>
            <ul>
              <li>Online (general) IDE: <a href="https://repl.it" target="_blank" rel="noopener noreferrer">repl.it</a></li>
              <ul>
                <li>You will need to create account</li>
                <li>For each new project, you will create a new repl & select html/css/js as the language</li>
                <li>This is best used for static websites (use basic html, css & js) - so will only be used for the first tutorial</li>
              </ul>

              <br />

              <li>Online (specialised) IDE: <a href="https://editor.p5js.org/" target="_blank" rel="noopener noreferrer">P5js web editor</a></li>
              <ul>
                <li>You will need to create account</li>
                <li>This is used for creating graphics/games/simulations using JavaScript, at the end I will show how to include these in static websites (from tutorial 1)</li>
              </ul>

              <br />

              <li>Software IDE: <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a></li>
              <ul>
                <li>You will need to download the IDE</li>
                <li>This is will be used for the final tutorial (using react for DOM & connecting websites to a database for dynamic content)</li>
              </ul>

            </ul>

          </div>

          <Requirements alt="clipboard with pen" />
        </div>
      </div>

      <div id="tutorials">
        <TutorialBG />
        <div className="divided-box-left">
          <Tutorial alt="online learning" />

          <div className="overview">
            <h1>Overview</h1>
            <p>This site currently provides 3 tutorials</p>
            <ol>
              <li><HashLink name="Basic websites" id="webdev1" /> - Including basic html, css & js</li>

              <li><HashLink name="Graphics with p5.js" id="webdev2" /> - Use of the P5.js library</li>

              <li><HashLink name="Basic full stack web development (with MERN)" id="webdev3" /> - Including react.js (using hooks!) & then adding a backend with express & mongoose</li>
            </ol>
          </div>
        </div >

        <hr />

        <WebBasics />
        <Graphics />
        <FullStack />
      </div>
    </div>
  );
}

export default Webdev;
