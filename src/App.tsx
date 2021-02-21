import React from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

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
              <Home />
            </Route>
          </Switch>
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
