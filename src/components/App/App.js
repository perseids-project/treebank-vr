import React, { StrictMode } from 'react';
import { PerseidsHeader, PerseidsFooter } from 'perseids-react-components';
import {
  BrowserRouter as Router, Route, Switch, NavLink,
} from 'react-router-dom';

import styles from './App.module.css';

import Home from '../Home';
import Graph from '../Graph';

const innerRouter = () => (
  <StrictMode>
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
      <main role="main" className={styles.main}>
        <div className="container text-center">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </main>
      <PerseidsFooter
        github="https://github.com/perseids-project/treebank-vr"
        report="https://github.com/perseids-project/treebank-vr/issues"
        doi="10.5281/zenodo.3991082"
      />
    </Router>
  </StrictMode>
);

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/:url/:chunk" component={Graph} />
      <Route path="/" component={innerRouter} />
    </Switch>
  </Router>
);

export default App;
