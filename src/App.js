import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Artworks from './components/Artworks';
import Detail from './components/Detail';
import Footer from  './components/Footer';
import Premise from "./components/Premise";
import Collection from './components/Collection';
import Home from './components/Home'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
  return (
    <Router>
    <div className="App">
     <Nav />
     <Switch>
       <Route path="/" exact component={Home}/>
        <Route path="/premise" exact component={Premise}/>
        <Route path="/artworks" exact component={Artworks}/>
        <Route path="/artworks/:id" component={Detail}/>
        <Route path="/collection" component={Collection}/>
     </Switch>
     <Footer />
    </div>
    </Router>
  );
}
}

export default App;
