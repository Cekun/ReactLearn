import React from 'react';
//import logo from './assets/img/logo.svg';
//import './assets/css/App.css';
import Home from './components/Home';
import News from './components/News';
import HandleFunc from './components/HandleFunc'
import EventObj from './components/EventObj'

function App() {
  //JSX
  return (
    <div className="App">
      <header className="App-header">
        
          <Home></Home>
        <News/>
        <HandleFunc></HandleFunc>
        <EventObj></EventObj>
      </header>
    </div>
  );
}

export default App;
