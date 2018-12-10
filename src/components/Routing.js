import React ,{Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Header from './Header';
import Featurewidget from './Featurewidget';

class Routing extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Header}/>
          </Switch>
          <Featurewidget/>
        </div>
      </Router>
    )
  }
}
export default Routing;

