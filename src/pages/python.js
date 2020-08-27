//React dependencies
import React, { useContext } from 'react';
import HashLink from './../components/navigation/HashLink';

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
import { ReactComponent as Others } from './../assets/svgs/search.svg';
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

      <div id="resources">
        <div className="divided-box-right">
          <div className="requirements">
            <h1>Other resources available</h1><span>(that you may prefer!)</span>

            <h2>Websites</h2>
            <ul>
              <li><a href="https://www.w3schools.com/python/python_intro.asp" target="_blank" rel="noopener noreferrer">W3Schools</a> - an extensive python tutorial including - basics, file handling, Numpy, machine learning, handling databases</li>
              <li><a href="https://www.codecademy.com/learn/learn-python-3" target="_blank" rel="noopener noreferrer">Codeacademy</a> - this specific tutorial teaches you the basics, but there are many other courses to learn specific parts of python on this site</li>
              <li><a href="https://www.learnpython.org/" target="_blank" rel="noopener noreferrer">LearnPython.org</a> - includes basics, data science & advanced topics e.g. regular expressions</li>
            </ul>

            <h2>Youtube tutorials</h2>
            <ul>
              <li><a href="https://youtu.be/rfscVS0vtbw" target="_blank" rel="noopener noreferrer">Learn Python - Full Course for Beginners (FreeCodeCamps)</a> - a 4.5 hour youtube video, includes all the python basics included in this website & more</li>
              <li><a href="https://youtu.be/_uQrJ0TkZlc" target="_blank" rel="noopener noreferrer">Python for beginners (Programming with Mosh)</a> - a 6 hour youtube video, includes many example projects with machine learning & web development included</li>
              <li><a href="https://www.youtube.com/playlist?list=PLlrxD0HtieHhS8VzuMCfQD4uJ9yne1mE6" target="_blank" rel="noopener noreferrer">Python for beginners (Microsoft)</a> - a 44 part playlist, containing many projects & advice for what to do next</li>
            </ul>

          </div>

          <Others alt="www" />
        </div>
      </div>

      <hr />

      <div id="requirements">
        <div className="divided-box-left">
          <Requirements alt="clipboard with pen" />

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
              <li><HashLink name="Python basics" id="python1" /> - Including variables, inputs, outputs, loops, arrays</li>

              <li><HashLink name="Python basics plus" id="python2" /> - Including dictionaries, functions, classes, error handling, regex & file handling</li>

              <li><HashLink name="TKinter" id="python3" /> - Used to make GUIs</li>
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
