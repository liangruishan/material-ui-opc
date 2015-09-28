'use strict';

let React = require('react');
let Router,{Route} = require('react-router');
var AuthStore = require('../../stores/AuthStore');

var AuthMixin = {
  contextTypes: {
    router: React.PropTypes.func
  },

  componentWillMount: function(){
    if(!AuthStore.isLogined()){
      this.setState({isLogined: false});
    }
  }
}
