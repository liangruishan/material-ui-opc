let React = require('react');
let Router = require('react-router');
let Reflux = require('reflux');
let {
  AppBar,
  AppCanvas,
  FontIcon,
  IconButton,
  EnhancedButton,
  Menu,
  Mixins,
  RaisedButton,
  Styles,
  Tab,
  Tabs,
  Paper } = require('material-ui');
  let AuthStore = require('./stores/AuthStore');
  let { StylePropable, StyleResizable } = Mixins;
  let { Colors, Spacing, Typography } = Styles;
  let ThemeManager = new Styles.ThemeManager();
  let RouteHandler = Router.RouteHandler;
  let LoginPage = require('./components/Login/LoginPage');
  let MainNav = require('./components/Navigators/MainNav');
  let Header = require('./components/Header/Header');

  ThemeManager.setTheme(ThemeManager.types.DARK);
  let Main = React.createClass({
    mixins: [Reflux.listenTo(AuthStore,"_auth")],

    contextTypes: {
      router: React.PropTypes.func,
    },

    _auth: function(rsp){
      this.setState({isLogined: rsp.type === "login"});
    },

    getInitialState: function(){
      return {isLogined: AuthStore.isLogined()}
    },

    childContextTypes: {
      muiTheme: React.PropTypes.object,
    },

    getChildContext() {
      return {
        muiTheme: ThemeManager.getCurrentTheme(),
      };
    },

    getStyles() {
      let darkWhite = Colors.darkWhite;
      return {
        footer: {
          backgroundColor: Colors.grey900,
          textAlign: 'center'
        },
        a: {
          color: darkWhite
        },
        p: {
          margin: '0 auto',
          padding: 0,
          color: Colors.lightWhite,
          maxWidth: 335
        },
      };
    },

    componentWillMount(){
      ThemeManager.setComponentThemes({
        inkBar: {
          backgroundColor: Colors.yellow200,
        },
      });
    },

    render() {
      if(!this.state.isLogined){
        return (
          <LoginPage />
        );
      }

      return (
        <div>
          <Header />
          <RouteHandler />
        </div>
      );
    },

  });

  module.exports = Main;
