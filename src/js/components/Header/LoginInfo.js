
let React = require('react');
let Reflux = require('reflux');
let AuthAction = require('../../actions/AuthAction');
let { AppBar, FlatButton } = require('material-ui');

let LoginInfo = React.createClass({
//mixins: [Reflux.listenTo(AuthStore,"_logout")],

  _handleLogout() {
    AuthAction.logout();
  },

  render() {
    return (
      <AppBar title="全渠道销售管理平台" style={{backgroundColor:'#323641',minHeight:'80px',position:'fixed',top:'0'}}
        zDepth={0}
        iconElementLeft={<div></div>}
        iconElementRight={<FlatButton onTouchTap={this._handleLogout} label="注销" />} />
    )
  }
});

module.exports = LoginInfo;
