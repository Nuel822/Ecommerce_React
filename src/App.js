import React from 'react';
import './App.css';
import { Homepage } from "./Pages/Homepage/homepage.component";
import './Pages/Homepage/homepage.style.scss';
import { Switch, Route } from "react-router-dom";
import ShopPage  from './Pages/Shop/shoppage.component';


function App() {


  return (
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route path="/shop" component={ShopPage}/>
    </Switch>

  );
}

export default App;
