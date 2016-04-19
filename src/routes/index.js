import React from 'react';
import { Route, IndexRoute } from 'react-router';

import CoreLayout from 'layouts/CoreLayout';
import HomeView from 'views/Home/View';
import PhoneView from 'views/Phone/View';
import BalanceView from 'views/Balance/View';
import SuccessView from 'views/Success/View';

export default (store) => (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='/phone' component={PhoneView} />
    <Route path='/balance' component={BalanceView} />
    <Route path='/success' component={SuccessView} />
  </Route>
);
