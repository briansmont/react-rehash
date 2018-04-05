import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import {RoomList} from './components/RoomList.js';

var config = {
    apiKey: "AIzaSyCJur34Cd8naAk0Cls1BAUyBxDm5mf7fNQ",
    authDomain: "chat-app-f3313.firebaseapp.com",
    databaseURL: "https://chat-app-f3313.firebaseio.com",
    projectId: "chat-app-f3313",
    storageBucket: "chat-app-f3313.appspot.com",
    messagingSenderId: "25873991586"
  };
firebase.initializeApp(config);



class App extends Component {
  
  render() {
    return (
      <div className="App">
        <RoomList firebase={firebase} />
      </div>
    );
  }
}

export default App;
