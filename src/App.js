import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalState from './context/global-state';
import ProductsPage from './pages/Products';
import CartPage from './pages/Cart';

import './App.css';

export default function App () {

  return (
    <GlobalState>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ProductsPage} exact />
          <Route path="/cart" component={CartPage} exact />
        </Switch>
      </BrowserRouter>
    </GlobalState>
  );
}
