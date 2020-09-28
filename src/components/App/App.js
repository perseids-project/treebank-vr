import React from 'react';
import { PerseidsHeader, PerseidsFooter } from 'perseids-react-components';
import {
  BrowserRouter as Router, Route, Switch, NavLink,
} from 'react-router-dom';

import Home from '../Home';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <PerseidsHeader>
      Treebank Virtual Reality

      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/">
            Home
          </NavLink>
        </li>
      </ul>
    </PerseidsHeader>
    <main role="main">
      <div className="container text-center">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/:url/:index?" component={Cloud} /> */}
        </Switch>
      </div>
    </main>
    <PerseidsFooter
      github="https://github.com/perseids-project/treebank-vr"
      report="https://github.com/perseids-project/treebank-vr/issues"
      doi="10.5281/zenodo.3991082"
    />
  </Router>
);

export default App;
