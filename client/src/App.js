import React, { Component } from 'react';
import AppMenu from './Components/AppMenu';
import Homepage from './Pages/Homepage'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">

          <AppMenu/>

          <Homepage/>

      </div>
    );
  }
}

export default App;
