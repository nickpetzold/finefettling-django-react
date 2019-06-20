import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './stylesheets/index.scss';
import Landing from './components/landing.jsx';
import Home from './components/landing.jsx';
import Footer from './components/footer.jsx';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Landing} />
      <Route path="/home/" component={Home} />
    </div>
    <div>
      <Footer />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
