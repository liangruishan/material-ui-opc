/*
{
id: "module id here",
name: "模块名称",
functions: [
function_nav1,
function_nav2
]
}
*/
'use strict';

let React = require('react');
let FunctionNav = require('./FunctionNav');
import {FlatButton} from 'material-ui';
//import '../../../styles/opc.css';
var ModuleNav = React.createClass({
  propTypes:{
    nav: React.PropTypes.object.isRequired
  },

  getInitialState(){
    return {module_open: true};
  },

  _toggle: function(){
    this.setState({module_open: !this.state.module_open});
  },

  getThemePalette: function getThemePalette() {
    return this.context.muiTheme.palette;
  },

  getTheme: function getTheme() {
    return this.context.muiTheme.component.leftNav;
  },

  render(){
    let navs = [];
    this.props.nav.menus.map((nv)=>{
      navs.push(
        <FunctionNav key={"module_nav_"+nv.id} nav={nv} />
      );
    });

    let moduleStyle = {
      display: this.state.module_open ? '':'none',
    };

    return (
      <div style={{borderStyle: "ridge"}}>
        <FlatButton
          style={{width: "100%", backgroundColor: '#c0c0c0', fontSize:'25px', textAlign: 'center'}}
          primary = {true}
          onTouchTap={this._toggle}
          label={this.props.nav.name} />
        <div style={moduleStyle} >
          {navs}
        </div>
      </div>
    );
  }
})

module.exports = ModuleNav;
