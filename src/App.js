import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Media from './components/Media';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/shop">
              <Shop/>
            </Route>
            <Route path="/media">
              <Media/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
