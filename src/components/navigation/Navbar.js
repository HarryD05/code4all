//React dependencies
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

//SVGs
import { ReactComponent as HomeIcon } from '../../assets/svgs/home.svg';
import { ReactComponent as PythonLogo } from '../../assets/svgs/python.svg';
import { ReactComponent as WebdevLogo } from '../../assets/svgs/web-dev.svg';

//Components
import HashLink from './HashLink';

//Context
import { LocationContext } from './../../context/LocationContext'

//Styling
import './navbar.scss';

const Navbar = () => {
  const locContext = useContext(LocationContext);

  const scroll = () => window.scrollTo(0, 0);

  const renderPython = () => {
    return (
      <div className="links">
        <HashLink id="desc" name="Description" />
        <HashLink id="resources" name="Resources" />
        <HashLink id="requirements" name="Requirements" />
        <HashLink id="tutorials" name="Tutorials" />
      </div>
    )
  }

  const renderWebdev = () => {
    return (
      <div className="links">
        <HashLink id="desc" name="Desc." />
        <HashLink id="requirements" name="Req." />
        <HashLink id="tutorials" name="Tutorials" />
      </div>
    )
  }

  const getNavClass = () => {
    return (locContext.getCurrent() === 'python' || locContext.getCurrent() === 'webdev' ? null : 'closed');
  }

  return (
    <nav className={getNavClass()}>
      <div className="major">
        <div className="title">
          <h1 onClick={() => window.scrollTo(0, 0)}>Code4All</h1>
        </div>

        {locContext.getCurrent() === 'python' ? renderPython() : renderWebdev()}
      </div>

      <div className="minor">
        <NavLink className="link" to="/python"><PythonLogo onClick={scroll} className="svg" alt="python" /></NavLink>

        <NavLink className="link" to="/home"><HomeIcon onClick={scroll} className="svg" alt="home" /></NavLink>

        <NavLink className="link" to="/webdev"><WebdevLogo onClick={scroll} className="svg" alt="web-dev" /></NavLink>
      </div>
    </nav>
  )
}

export default Navbar;