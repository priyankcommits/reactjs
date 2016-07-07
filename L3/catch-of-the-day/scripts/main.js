var React = require("react");
var ReactDOM  = require("react-dom");
var ReactRouter = require("react-router");
var h = require("./helpers");

var History = ReactRouter.History;
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var Navigation = ReactRouter.Navigation;
var createBrowserHistory = require("history/lib/createBrowserHistory");

var App = React.createClass({
	render: function(){
		return(
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Sea Food market"/>
				</div>
				<Order />
				<Inventory />
			</div>

			)
	}
});

var Header = React.createClass({
	render: function(){
		return(
			<header className="top">
				<h1>Catch
				<span className="ofThe">
					<span className="of">of</span>
					<span className="the">the</span>
				</span>	
				day
				</h1>
				<h3 className="tagline"><span>{this.props.tagline}</span></h3>
			</header>
			)
	}
});

var Order = React.createClass({
	render: function(){
		return(
			<p>Order</p>
			)
	}
});

var Inventory = React.createClass({
	render: function(){
		return(
			<div>
				<h2>Inventory</h2>
				<AddFishForm />
			)
	}
});

var StorePicker = React.createClass({
	mixins : [History],
	goToStore : function(event){
		event.preventDefault();
		var storeID = this.refs.storeId.value;
		this.history.pushState(null, '/store/' + storeID);
	},
	render: function(){
		var name = "pri";
		return(
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Welcome Form, {name}</h2>
				<input type="text" ref="storeId" required  defaultValue={h.getFunName()}/>
				<input type="Submit" defaultValue="Submit"/>	
			</form>
			)
	}
});

var NotFound = React.createClass({
	render: function(){
		return(
			<h1>Not found</h1>
			)
	}
});

var routes = (
	<Router history={createBrowserHistory()}>
		<Route path="/" component={StorePicker} />
		<Route path="/store/:storeId" component={App} />
		<Route path="*" component={NotFound} />
	</Router>
	)

ReactDOM.render(routes, document.querySelector('#main'));