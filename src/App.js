import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Banner from './components/Banner';
import Featurewidget from './components/Featurewidget';
import Imagegallery from './components/Imagegallery';
import Products from './components/Products';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner/>
        <Featurewidget/>
        <Products/>
      </div>
    );
  }
}

export default App;
