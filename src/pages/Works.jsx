import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import NavWorks from './NavWorks';
import Work from './Work';

const Works = () => (
  <div>
    <h1>Works</h1>
    <div className="navWorks">
      <NavWorks />
    </div>
    <main>
      <Switch>
        <Route path="/works/:workSlug">
          <Work />
        </Route>
      </Switch>
    </main>
  </div>
);

export default Works;
