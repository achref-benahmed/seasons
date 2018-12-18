import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';



class App extends React.Component {
constructor (props){
  super(props);

  this.state = {lat : null , error : ''};


}

componentDidMount(){
  window.navigator.geolocation.getCurrentPosition(
    position => this.setState({lat :position.coords.latitude}),
    err => this.setState({error : err.message})
  );

}

  render(){
    if (this.state.error && !this.state.lat){
      return <div> error : {this.state.error} </div>
    }
    if (!this.state.error && this.state.lat) {
      return <SeasonDisplay lat = {this.state.lat} />

    }

    return <div > Loading .. </div>

  } ;


};

ReactDom. render (

  <App /> , document.querySelector('#root')
);
