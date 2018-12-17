import React from 'react';

const SeasonDisplay = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
  );
  return <div > It works < /div>;

};


export default SeasonDisplay;
