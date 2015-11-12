
'use strict';

let React = require('react');
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
  Paper,
  Table,
  TableHeader,
  TableHeaderColumn,
  TableBody,
  TableRow,
  TableFooter,
  TableRowColumn,
  TextField,
  SelectField,
  hintText,
  FlatButton,
  errorText,
  selectValue,
  menuItems
   } = require('material-ui');
   let { StylePropable, StyleResizable } = Mixins;
   let { Colors, Spacing, Typography } = Styles;


var SearchBox6 = React.createClass({
render() {
	let Textfield = {
		fontSize:'14px',
		marginRight:'25px'
	};
	let Flatbutton = {
		backgroundColor:'#ced3e5',
		width: '40px !important',
		height:'25px',
		boxShadow:'0px'
	};
    return (
    	 <div>
		<TextField hintText="商品中文名称" underlineFocusStyle={{borderColor:'#c1c8de'}} style={Textfield} />
		<TextField hintText="商品英文名称" underlineFocusStyle={{borderColor:'#c1c8de'}} style={Textfield} />
		<RaisedButton label="查询" backgroundColor={Flatbutton.backgroundColor} style={{minWidth: Flatbutton.width,height:Flatbutton.height,boxShadow:Flatbutton.boxShadow}}/>
	</div>
    )
  }
});

module.exports = SearchBox6;
/*
<form id="">
        <div className="sits">
          <label>商品中文名称</label>
          <input type="text" value="" className="form-control w2"></input>
        </div>
        <div className="sits">
          <label>商品英文名称</label>
          <input type="text" value="" className="form-control w2"></input>
        </div>
        <div className="sits">
          <buttom type="submit" className="form-but">查询</buttom>
        </div>
      </form>
*/