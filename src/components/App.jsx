import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';


import SarchPage from './SarchPage';
import AboutPage from './AboutPage';


const App = () => (
  <Router>
      <div className="app">
        <ul className="left-navi">
          <li><Link to="/">ホテル検索</Link></li>
          <li><Link to="/about">about</Link></li>
        </ul>

        <Switch>
          <Route exact path="/" component={SarchPage} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </div>
    </Router>
);

export default App;
