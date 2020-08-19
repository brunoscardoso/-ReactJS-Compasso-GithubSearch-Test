import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import DetailsUser from './pages/DetailsUser';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={DetailsUser} path="/user/:id" />
    </BrowserRouter>
  );
};

export default Routes;
