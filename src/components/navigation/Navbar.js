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
  return (
    <nav>
      <NavLink className="link" to="/home"><HomeIcon className="svg" alt="home" /></NavLink>
      <NavLink className="link" to="/python"><PythonLogo className="svg" alt="python" /></NavLink>
      <NavLink className="link" to="/webdev"><WebdevLogo className="svg" alt="web-dev" /></NavLink>
    </nav>
  )
}

export default Navbar;