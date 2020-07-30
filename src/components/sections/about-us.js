//React dependencies
import React from 'react';

//SVGs
import { ReactComponent as GithubIcon } from './../../assets/svgs/github-icon.svg';

//Styling
import './sections.scss';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="bg-img">
        <div className="title">
          <h1>About Us</h1>
        </div>
      </div>

      <div className="text">
        <em>A project created in the aftermath the GSL Summer Catalyst</em>

        <p>Being developed by GCSE student Harry D.</p>

        <a href="https://github.com/harryd05" target="_blank" rel="noopener noreferrer"><GithubIcon alt="github icon" /></a> <br />

        <button onClick={() => alert('not implemented yet...')}>Submit a question</button>
      </div>
    </div>
  );
}

export default AboutUs;
