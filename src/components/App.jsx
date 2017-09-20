import React from "react";
import Game from "./Game";
import { Switch, Route } from 'react-router-dom';
// import './../index.css';

function App(){
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Game} />
      </Switch>
      <p>Hi</p>
    </div>
  );
}

export default App;
