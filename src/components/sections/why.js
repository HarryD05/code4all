//React dependencies
import React from 'react';

//Components
import ListItem from './listItem/listItem'

//Styling
import './sections.scss';

const Why = () => {
  return (
    <div className="why">
      <div className="bg-img">
        <div className="title">
          <h1>Why learn to code?</h1>
        </div>
      </div>

      <div className="text reasons">
        <div className="list">
          <ListItem index={1} content={(<p>It's <u>fun</u>, <em>rewarding</em> & <b>empowering</b></p>)} />
          <ListItem index={2} content={(<p>Your projects are <b>a work of art</b></p>)} />
          <ListItem index={3} content={(<p>Improve your <u>problem solving skills</u></p>)} />
          <ListItem index={4} content={(<p>Huge amounts of job opportunities <em>(well paid too!)</em></p>)} />
          <ListItem index={5} content={(<p>Improve your understanding of <b>how our world works</b></p>)} />
          <ListItem index={6} content={(<p><b>You</b> can <u>improve</u> the world & help those in need</p>)} />
        </div>
      </div>
    </div>
  );
}

export default Why;
