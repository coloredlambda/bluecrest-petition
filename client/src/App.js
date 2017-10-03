import React, { Component } from 'react';
import AppMenu from './Components/AppMenu';
import AppRouter from './AppRouter';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">

          <AppMenu/>

          <AppRouter/>

      </div>
    );
  }
}

export default App;
