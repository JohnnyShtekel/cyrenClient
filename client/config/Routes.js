import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/Main.js';


// $('select').material_select();

const Routes = () => {
  return (

    <Router  onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
      <Route path="/" component={Main}/>
    </Router>
  );
};

export default Routes;
