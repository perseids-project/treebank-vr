import React from 'react';
import { PerseidsHeader, PerseidsFooter } from 'perseids-react-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home';
import Cloud from '../Cloud';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <>
      <PerseidsHeader>
        Treebank Wordcloud
      </PerseidsHeader>
      <main role="main">
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:url/:index?" component={Cloud} />
          </Switch>
        </div>
      </main>
      <PerseidsFooter />
    </>
  </Router>
);

export default App;
