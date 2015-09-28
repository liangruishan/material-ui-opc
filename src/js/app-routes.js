let React = require('react');
let Router = require('react-router');
let Route = Router.Route;
let Redirect = Router.Redirect;
let DefaultRoute = Router.DefaultRoute;

// Here we define all our material-ui ReactComponents.
let LoginPage = require('./components/Login/LoginPage');
let MainPage = require('./main');
let DemoPage = require('./demo');
let MainNav = require('./components/Navigators/MainNav');

let AppRoutes = (
  <Route name="root" path="/" handler={MainPage} >
    <Route name="main" handler={MainNav}>
      <Route name="demo" handler={DemoPage} />
      <Redirect from="/" to="main" />
    </Route>
  </Route>
);

module.exports = AppRoutes;
