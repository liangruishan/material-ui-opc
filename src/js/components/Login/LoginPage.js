/**
* Created by wallace on 2015/9/18.
*/
import React from 'react/addons';
import Reflux from 'reflux';
import AuthAction from '../../actions/AuthAction';
import AuthStore from '../../stores/AuthStore';

let mui = require('material-ui');

let {FlatButton, Dialog, TextField} = mui;
let Colors = mui.Styles.Colors;
let ThemeManager = new mui.Styles.ThemeManager();

var LoginPage = React.createClass({
  mixins: [Reflux.listenTo(AuthStore, '_loginComplete')],
  contextTypes: {
    router: React.PropTypes.func
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme(),
    };
  },

  componentDidMount: function(){
    if(AuthStore.isLogined()){
      this.refs.loginDialog.dismiss();
    }
    else{
      this.refs.loginDialog.show();
    }
  },

  _loginComplete: function(rsp){
    if(rsp.sucess){
      this.refs.loginDialog.dismiss();
    }
    else{
      console.log('登录失败');
    }
  },

  _login: function(){
    var payload ={
      username: this.refs.username.getValue(),
      password: this.refs.password.getValue()
    };

    if(payload.username === ''){
      this.refs.username.setErrorText('请输入登录名');
      this.refs.username.focus();
      return;
    }

    if(payload.password === ''){
      this.refs.password.setErrorText('请输入密码');
      this.refs.password.focus();
      return;
    }

    AuthAction.login(payload);
  },
  _cancel: function(){
    console.log('cancel');
  },

  inputUserName: function(){
    if(this.refs.username.getValue()!= '')
    {
      this.refs.username.setErrorText(null);
    }
  },

  inputPassword: function(){
    if(this.refs.password.getValue()!= '')
    {
      this.refs.password.setErrorText(null);
    }
  },

  render() {
    let loginActions = [
      <FlatButton
        label="取消"
        secondary={true}
        onTouchTap={this._cancel} />
      ,
      <FlatButton
        label="登录"
        primary={true}
        onTouchTap={this._login} />
    ];
    return (
      <Dialog
        openImmidately = {true}
        actions = {loginActions}
        ref = 'loginDialog'
        autoDetectWindowHeight={true}
        autoScrollBodyContent={true}
        modal={true}>
        <TextField
          ref="username"
          fullWidth = {true}
          hintText="请输入登录名"
          floatingLabelText="登录名"
          onChange = {this.inputUserName}
          type="username" />
        <TextField
          ref="password"
          fullWidth={true}
          hintText="请输入密码"
          floatingLabelText="密码"
          onChange = {this.inputPassword}
          type="password" />
      </Dialog>
    );
  }
});
module.exports = LoginPage;
