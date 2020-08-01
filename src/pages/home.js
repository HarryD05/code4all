//React dependencies
import React, { useContext } from 'react';

//Components
import Main from './../components/sections/main';
import Aims from './../components/sections/aims';
import Why from './../components/sections/why';
import AboutUs from './../components/sections/about-us';

//Context
import { LocationContext } from './../context/LocationContext';

//Styling
import './pages.scss';

const Home = () => {
  const locContext = useContext(LocationContext);
  locContext.setCurrent('home');

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
