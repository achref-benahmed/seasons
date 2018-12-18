import React from 'react';
import ReactDom from 'react-dom';
//import SeasonDisplay from './SeasonDisplay';



class App extends React.Component {
constructor (props){
  super(props);

  this.state = {lat : null , error : ''};

  window.navigator.geolocation.getCurrentPosition(
    position => {
      this.setState({lat :position.coords.latitude});
    },
    err => {
      this.setState({error : err.message});
    }
  );
}

  render(){

      return <div> Lattitude : {this.state.lat} </div>

  } ;


};

ReactDom. render (

  <App /> , document.querySelector('#root')
);
