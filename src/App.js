import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import Product from './pages/Product';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/product/:id' component={Product}/>
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
