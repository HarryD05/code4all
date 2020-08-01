//Dependencies
import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';

const HashLink = props => {
  return (
    <Link
      to={"#" + props.id}
      activeClassName={null}
      smooth={true}
    >
      {props.name}
    </Link>
  )
}

export default HashLink;