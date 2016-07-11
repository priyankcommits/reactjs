var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router  = ReactRouter.Router;
var Route = ReactRouter.Route;
var createBrowserHistory = require('history/lib/createBrowserHistory');

import NotFound from './components/NotFound';
import StorePicker from './components/StorePicker';
import Header from './components/Header';
import Fish from './components/Fish';
import AddFishForm from './components/AddFishForm';
import Order from './components/Order';
import Inventory from './components/Inventory';
import App from './components/App';

var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={StorePicker}/>
    <Route path="/store/:storeId" component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
