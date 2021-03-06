//React dependencies
import React from 'react';

//Styling
import './sections.scss';

const Aims = () => {
  return (
    <div className="text aims">
      <h1>Our aims</h1>
      <ul>
        <li><b>everyone</b> should have the opportunity to <u>learn to code</u>, irrespective of money & background</li>
        <hr />
        <li><u>improve diversity & representation</u> within the coding community, atleast 80% of programmers are men - <b>we need to change this</b></li>
        <hr />
        <li>these link to the quality education & gender equality <a href="https://sdgs.un.org/goals" target="_blank" rel="noopener noreferrer">Sustainable Development Goals</a></li>
      </ul>
    </div>
  );
}

export default Aims;
