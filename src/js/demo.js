
let React = require('react');
let mui = require('material-ui');
let RaisedButton = mui.RaisedButton;
let Dialog = mui.Dialog;
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;
let {Card, CardMedia, CardActions, FlatButton, Avatar,CardHeader, CardTitle, CardText} = mui;
let Router = require('react-router');
let {Link} = Router;
let MainPage = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme(),
    };
  },

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500,
    });
  },

  render() {
    let containerStyle = {
      textAlign: 'center',
      paddingTop: '10px',
      width: '100%'
    };

    let standardActions = [
      { text: '确定' },
    ];

    var card = null;

    return (

      <div style={containerStyle}>

        <Card initiallyExpanded={false}>
          <CardHeader
            title="订单中心"
            avatar={<Avatar style={{color:'red'}}>A</Avatar>}
            showExpandableButton={true}>
          </CardHeader>
          <CardActions expandable={true}>
            <ol><Link to="main">首页</Link></ol>
            <ol><Link to="main">首页</Link></ol>
          </CardActions>
          <CardActions expandable={true}>
            <Card initiallyExpanded={true}>
              <CardHeader
                title="订单中心"
                subtitle="订单管理"
                avatar={<Avatar style={{color:'red'}}>A</Avatar>}
                showExpandableButton={true}>
              </CardHeader>
              <CardActions expandable={true}>
                <ol><Link to="main">首页</Link></ol>
                <ol><Link to="main">首页</Link></ol>
              </CardActions>
            </Card>
          </CardActions>
        </Card>

      </div>
    );
  },

  _handleTouchTap() {
    this.refs.superSecretPasswordDialog.show();
  },

});

module.exports = MainPage;
