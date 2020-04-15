import React from 'react';
import './App.css';
import { Homepage } from "./Pages/Homepage/homepage.component";
import './Pages/Homepage/homepage.style.scss';
import { Switch, Route } from "react-router-dom";



function App() {

const HatsPage = () => {
  return <h1>HatsPage</h1>
}
  return (
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route path="/hats" component={HatsPage}/>
    </Switch>

  );
}

export default App;
