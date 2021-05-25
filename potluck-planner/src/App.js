import "./App.css";
import React from "react";
import Header from "./Components/Login/Header";
import { Route, Switch } from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from './Components/Login/SignUp'

function App() {
  return (
    <div>
      <Switch>
        <Route path='/signup'>
          <SignUp/>
        </Route>
        <Route path="/">
          <Header />
          <Login/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
