import React, { Component } from 'react';
import Petition from './Components/Petition';
import ProgressBar from './Components/ProgressBar';
import { Container, Button } from 'semantic-ui-react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bluecrest College School Petition</h1>
        </header>

       <Container className="App-intro">

           <h2 style={{float : 'left'}}>Signatures : 300</h2>
           <h2 style={{float : 'right'}}>Target : 500</h2>

           <ProgressBar signatures={300}/>

           <Petition/>

           <Button primary size='large'>
               Sign Petition
           </Button>
       </Container>

      </div>
    );
  }
}

export default App;
