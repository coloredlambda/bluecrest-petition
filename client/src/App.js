import React, { Component } from 'react';
import Petition from './Components/Petition';
import ProgressBar from './Components/ProgressBar';
import swal from 'sweetalert';
import CommentBox from './Components/CommentBox';
import { Container, Button } from 'semantic-ui-react';
import axios from 'axios';
import logo from './logo.png';
import './App.css';

const comments = [
    {author : 'Raaj', text : 'Hello World'},
    {author : 'Kondas', text : 'Hey there, reduce the fees now!'}
];


class App extends Component {
  constructor(props){
      super(props);
      this.state = { signatures : 0, comments : []}
  }

  handlePetitionSign() {
      swal({
          title: 'Sign Petition',
          content : {
              element : 'input',
              attributes : {
                  placeholder : 'Name',
                  type : 'text'
              }
          },
          buttons: true
      })
          .then((name => {
              if(name){
                  console.log(name);
                  swal({
                      title: 'Sign Petition',
                      content : {
                          element : 'input',
                          attributes : {
                              placeholder : 'Make a comment',
                              type : 'text'
                          }
                      },
                      buttons: true
                  })
                      .then((comment => {
                          if(comment){
                              axios.post('/signPetition', {
                                  name : name,
                                  text : comment
                              })
                                  .then(res => {
                                      if(res.data){
                                          swal('Successfully signed petition')
                                      }else{
                                          swal('Failed to sign petition')
                                      }
                                  })
                          }else{
                              swal('Please input a comment. The petition is stronger if there are comments')
                          }
                      }))
              }else{
                  swal('Please input your name')
              }
          }))
  }



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

           <Button primary size='large' onClick={() => this.handlePetitionSign()}>
               Sign Petition
           </Button>

           <CommentBox comments={comments}/>
       </Container>

      </div>
    );
  }
}

export default App;
