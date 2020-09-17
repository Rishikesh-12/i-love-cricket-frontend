import React from 'react';
import './App.css';
import {Banner, Steps, Form, Developer} from './Components'

function App() {
  return (
    <div className="App">

      <div className="video">
        <video id="videopart" preload="auto" autoPlay="true" loop="loop" muted="muted">
          <source src="cricpro.mp4" type="video/mp4"></source>
        </video>
      </div>

      <div className="other">
        <Banner />
        <Developer /> 
        <Steps />
        <Form />
      </div>
        

    </div>
  );
}

export default App;
