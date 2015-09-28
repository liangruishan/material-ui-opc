'use strict';
import Reflux from 'reflux';
import AuthAction from '../actions/AuthAction';
import AuthService from '../services/AuthService';

var AuthStore = Reflux.createStore({
  listenables: [AuthAction],

  onLogin: function(payload){
    let rsp = AuthService.login(payload.username,payload.password);
    if(rsp.sucess){
      this.trigger({sucess: true, type: 'login'});
    }
    else{
      this.trigger({sucess: false, message: rsp.message, type: 'login'});
    }
  },

  onLogout: function(){
    AuthService.logout();
    this.trigger({sucess: true, type: 'logout'});
  },

  isLogined: function(){
    console.log('AuthService.loggedIn');
    return AuthService.loggedIn();
  }
});

module.exports = AuthStore;
