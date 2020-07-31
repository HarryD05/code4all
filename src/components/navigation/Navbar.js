//React dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

//SVGs
import { ReactComponent as HomeIcon } from '../../assets/svgs/home.svg';
import { ReactComponent as PythonLogo } from '../../assets/svgs/python.svg';
import { ReactComponent as WebdevLogo } from '../../assets/svgs/web-dev0.svg';

//Styling
import './navbar.scss';

const Navbar = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <nav>
      <NavLink className="link" to="/python"><PythonLogo onClick={scrollTop} className="svg" alt="python" /></NavLink>

      <NavLink className="link" to="/home"><HomeIcon onClick={scrollTop} className="svg" alt="home" /></NavLink>

      <NavLink className="link" to="/webdev"><WebdevLogo onClick={scrollTop} className="svg" alt="web-dev" /></NavLink>
    </nav>
  )
}

export default Navbar;