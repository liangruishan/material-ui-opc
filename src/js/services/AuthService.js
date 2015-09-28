'use strict';
import localStorage from "../utils/localStorage";
import http from "superagent";

var AuthService = {
  login: function(username,password){
    console.log("set token here ...");
    localStorage.token = 'wallace-demo-token';
    return {sucess:true};
  },

  loggedIn: function(){
    return !!localStorage.token;
  },

  logout: function(){
    localStorage.token = null;
    localStorage.removeItem('token');
    return true;
  }
}

module.exports = AuthService;
