import React from 'react';
import { PerseidsHeader, PerseidsFooter } from 'perseids-react-components';
import {
  BrowserRouter as Router, Route, Switch, NavLink,
} from 'react-router-dom';

import Home from '../Home';
import Cloud from '../Cloud';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <PerseidsHeader>
      Treebank Word Cloud

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
          <Route path="/:url/:index?" component={Cloud} />
        </Switch>
      </div>
    </main>
    <PerseidsFooter
      github="https://github.com/perseids-project/treebank-wordcloud"
      report="https://github.com/perseids-project/treebank-wordcloud/issues"
    />
  </Router>
);

export default App;
