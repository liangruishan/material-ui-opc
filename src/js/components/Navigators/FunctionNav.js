/*
Ex:
{
id: 'navigator id here',
name: '订单管理'，
functions: [
functionlink1,
functionlink2
]
}
*/
'use strict';

let React = require('react');
let LinkNav = require('./LinkNav');
let mergeAndPrefix = require('material-ui/lib/utils/styles');
let {FlatButton} = require('material-ui');
//import '../../../styles/opc.css';

var FunctionNav = React.createClass({
  mixins: [mergeAndPrefix],

  propTypes:{
    nav: React.PropTypes.object.isRequired,
    headerStyle: React.PropTypes.object,
    menuStyle: React.PropTypes.object,
    menuItemStyle: React.PropTypes.object,
  },

  getInitialState(){
    return {function_open: true};
  },

  _toggle: function(){
    this.setState({function_open: !this.state.function_open});
  },

  render(){
    let displayStyle = {
      display: this.state.function_open ? '':'none',
    };

    let ulStyle = {
      fontSize:'14px',
      lineHeight: '35px',
      margin:'0',
    };

    let cursorStyle = {
      cursor: 'pointer',
      //paddingLeft:'80px',
      //fontSize: '15px',
      //fontFamily: 'Roboto',
      //lineHeight: '35px',
      margin:'0',
      fontWeight:'bold',
    };

    var items = [];
    this.props.nav.menus.map((nv)=>{
      items.push(
        <ul key={"function_nav_"+nv.id}>
          <LinkNav nav={nv} />
        </ul>
      );
    });
    return (
      <div>
        <FlatButton
          style={this.mergeAndPrefix(this.props.menuStyle,{width: '100%', backgroundColor:'#00FFFF', fontSize: '20px'})}
          secondary={true}
          label={this.props.nav.name}
          onTouchTap={this._toggle} />
        <div
          style={this.mergeAndPrefix(this.props.menuStyle, displayStyle)}>
          {items}
        </div>
      </div>
    );
  }
})

module.exports = FunctionNav;
