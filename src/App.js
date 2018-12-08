import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Banner from './components/Banner';
import Featurewidget from './components/Featurewidget';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner/>
        <Featurewidget/>
      </div>
    );
  }
}

export default App;
