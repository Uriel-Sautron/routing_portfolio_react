import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './Sass/App.scss';
import Nav from './Components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Works from './pages/Works';

function App() {
  return (
    <Router>
      <div>
        <header>
          <Nav />
        </header>
        <main>
          <Switch>

            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/works">
              <Works />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route>
              <p>page 404</p> 
            </Route>

          </Switch>  
        </main>
      </div>
    </Router>
  );
}

export default App;
