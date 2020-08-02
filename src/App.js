import React from 'react';
import './App.css';
import {Banner, TeamList, Form, Developer} from './Components'

function App() {
  return (
    <div className="App">
        <Banner />
        <Developer />
        <TeamList />

        <h3>Fill this form with appropriate details !</h3>
        <Form />

    </div>
  );
}

export default App;
