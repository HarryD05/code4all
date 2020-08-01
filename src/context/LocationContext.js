import React, { createContext, useState } from 'react';

export const LocationContext = createContext();

export default (props) => {
  const { children } = props;

  const [curr, setCurr] = useState(null);

  const setCurrent = current => {
    setCurr(current);
  }

  const getCurrent = () => {
    return curr;
  }

  return (
    <div>
      <LocationContext.Provider value={{ getCurrent, setCurrent }}>
        {children}
      </LocationContext.Provider>
    </div >
  )
}