import React from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <div className="container">
          <Switch>
            <Route path="/projects">
              <Projects />
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
