//React dependencies
import React, { useContext } from 'react';

//Components
import PythonBG from './../components/sections/python-bg';
import TutorialBG from './../components/sections/tutorials-bg';

//Tutorials
import PythonBasics1 from './../components/tutorials/python-basics1';
import PythonBasics2 from './../components/tutorials/python-basics2';
import TKinter from './../components/tutorials/tkinter';

//Context
import { LocationContext } from './../context/LocationContext';

//Styling
import './pages.scss';

//Assets
import { ReactComponent as PythonLogo } from './../assets/svgs/python-file.svg';
import { ReactComponent as Requirements } from './../assets/svgs/requirements.svg';
import { ReactComponent as Tutorial } from './../assets/svgs/tutorial.svg';

const Python = () => {
  const locContext = useContext(LocationContext);
  locContext.setCurrent('python');

  return (
    <div className="python">
      <PythonBG />

      <div id="desc">
        <div className="divided-box-left">
          <PythonLogo alt="python logo" />

          <div className="description">
            <h1>Description</h1>
            <ul>
              <li>Python is an interpreted, object-oriented, high-level programming language with dynamic typing</li>
              <li>Python's simple, easy to learn syntax emphasizes readability making it easy to understand, debug & maintain</li>
              <li>Python supports modules and packages, which encourages program modularity and code reuse</li>
              <li>Python has an extensive range of libraries available for a range of purposes e.g. data science, machine learning, graphics & GUIs</li>
              <li>Often, programmers fall in love with Python because of the simplicity of its syntax</li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div id="requirements">
        <div className="divided-box-right">
          <div className="requirements">
            <h1>Requirements</h1>
            <p>There are 2 options: </p>
            <ul>
              <li>Online IDE: <a href="https://repl.it" target="_blank" rel="noopener noreferrer">repl.it</a></li>
              <ul>
                <li>You will first need to create account</li>
                <li>For each new project, you will create a new repl & select python as the language</li>
              </ul>
              <br />

              <li>Software: <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">Python IDLE</a></li>
              <ul>
                <li>You will need to download the latest version</li>
                <li>For each new project</li>
                <ul>
                  <li>open IDLE & press ctrl + N to create a new file</li>
                  <li>save as... with the name of the project & save in a folder on your computer</li>
                </ul>
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
              <li><b>Python basics</b> - Including variables, inputs, outputs, loops, arrays</li>

              <li><b>Python basics plus</b> - Including dictionaries, functions & classes</li>

              <li><b>TKinter</b> - Used to make GUIs</li>
            </ol>
            <p>I suggest that you write any code example in your IDE of choice so you can see that you get the correct output</p>
          </div>
        </div>

        <hr />

        <PythonBasics1 />
        <PythonBasics2 />
        <TKinter />
      </div>
    </div>
  );
}

export default Python;
