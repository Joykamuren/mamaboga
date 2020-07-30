import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
  super(props)
  state = {
  type: "Vegetables",
}
  render ( ){
   return(
  
      <div>
        
        <h> We have {this.state.type} </h>
        <p> <img src={this.state.image}/> </p>
  
  </div>)
  }
       }

export default App;
