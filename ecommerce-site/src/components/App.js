import React from 'react';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage'
import ShopPage from '../pages/ShopPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopProvider from '../context/shopContext'
import Navbar from '../components/Navbar'
import Cart from '../components/Cart'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

  const engine = new Styletron();

function App() {
  return (

    <ShopProvider>
    
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>

      <Router>
      <Navbar/>
      <Cart/>
        <Switch>
          <Route path="/shop">
            <ShopPage/>
          </Route>
          <Route path="/product/:id">
            <ProductPage/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </Router>

    </StyletronProvider>

    </ShopProvider>
  );
}

export default App;
