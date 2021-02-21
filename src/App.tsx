import React from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <Router>
      {/* header here */}
      <main>
        <Switch>
          <Route path="/projects">
            <h1>Projects</h1>
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </main>
      {/* footer here */}
    </Router>
  );
}

export default App;
