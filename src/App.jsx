import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'
import About from './components/About';
import Login from './pages/Login'
import Signup from './pages/Signup';
import Professional from './pages/Professional';
import Personal from './pages/Personal';
import Educational from './pages/Educational';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Achievements from './pages/Achievements';
import Projects from './pages/Projects';
import Templates from './components/Templates';
import './css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/loging.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/personal">
            <Personal />
          </Route>
          <Route path="/professional">
            <Professional />
          </Route>
          <Route path="/educational">
            <Educational />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/achievements">
            <Achievements />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/templates">
            <Templates />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
