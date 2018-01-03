import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Admin from './components/admin';


const App = () => (
  <div>
    <Header />
    <Route exact path="/" component={Home} />
    <Route exact path="/admin" component={Admin} />
  </div>
);

export default App;
