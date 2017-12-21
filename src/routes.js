// src/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App';

const routes = (
  <Route path="/" component={App}>
    {/* <IndexRoute component={IndexPage}/>
    <Route path="athlete/:id" component={AthletePage}/>
    <Route path="*" component={NotFoundPage}/> */}
  </Route>
);

export default routes;