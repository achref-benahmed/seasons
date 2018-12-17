import React from 'react';
import ReactDom from 'react-dom';
//import SeasonDisplay from './SeasonDisplay';



class App extends React.Component {
constructor (props){
  super(props);
}

  render(){
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );
      return <div> Lattitude : </div>

  } ;


};

ReactDom. render (

  <App /> , document.querySelector('#root')
);
