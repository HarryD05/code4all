//React dependencies
import React from 'react';

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

        <button onClick={() => alert('not implemented yet...')}>Submit a question</button>
      </div>
    </div>
  );
}

export default AboutUs;
