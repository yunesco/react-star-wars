import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navigation from './components/Navigation';
import Page from './components/Page';
import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import SearchPage from './pages/SearchPage';

import './styles/main.scss';

const App = () => (
  <Router>
    <Page>
      <Navigation />
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/planet/:name" component={DetailPage} />
          <Route path="/search/" component={SearchPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </AnimatePresence>
    </Page>
  </Router>
);
export default App;
