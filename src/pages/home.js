//React dependencies
import React from 'react';

//Components
import Main from './../components/sections/main';
import Aims from './../components/sections/aims';
import Why from './../components/sections/why';
import AboutUs from './../components/sections/about-us';

//Styling
import './pages.scss';

const Home = () => {
  return (
    <div className="home">
      <Main />
      <Aims />
      <Why />
      <AboutUs />
    </div>
  );
}

export default Home;
