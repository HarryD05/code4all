//React dependencies
import React from 'react';

//Styling
import './listItem.scss';

const ListItem = props => {
  const { index, content } = props;

  return (
    <div className="list-item">
      <div className="bubble">{index}</div>
      <div className="content">{content}</div>
    </div>
  );
}

export default ListItem;
