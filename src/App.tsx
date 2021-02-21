import React from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";

import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <div className="container">
          <Switch>
            <Route path="/projects">
              <h1>Projects</h1>
            </Route>
            <Route path="/">
              <h1>Home</h1>
            </Route>
          </Switch>
        </div>
      </main>
      {/* footer here */}
    </Router>
  );
}

export default App;
