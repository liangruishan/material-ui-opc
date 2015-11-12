/*
  Ex:

  {
    name: '物流管理',
    functions: [{
      id: 1,
      name:'销售单打印',
      handler: 'orderHandler'
    },
    {
      id: 2,
      name:'物流',
      handler: 'printHandler'
    }]
  }

*/

'use strict';
let React = require('react');
import Router,{Route, Link } from 'react-router';
let mui = require('material-ui');
let Colors = mui.Styles.Colors;

var LinkNav = React.createClass({
  propTypes: {
    nav: React.PropTypes.object.isRequired
  },

  render(){
    let aStyle = {
      textDecoration:'none',
      color:'#ccc',
      fontSize:'12px',
      textAlign:'left',
      height:'30px',
      display:'block',
      lineHeight:'30px'
    };
    return (
          <Link style={aStyle} to={this.props.nav.handler}>{this.props.nav.name}</Link>
    );
  }
});

module.exports = LinkNav;
