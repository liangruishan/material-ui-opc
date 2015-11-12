
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


var SearchBox4 = React.createClass({
		getInitialState: function() {
    return { selectValue1: undefined};
  },
   _handleSelectValueChange1: function(e) {
    this.setState({
      selectValue1: e.target.value
    });
  },
  changeColor:function(){
  	this.setState({
  		underlineFocus: {
        borderBottom: 'solid 2px',
        borderColor: '#ced3e5',
      },
  	})
  },
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

	let Selectfield= {
		fontSize:'14px !important',
		marginRight:'25px',
		verticalAlign:'middle',
		borderColor:'#ced3e5'
	};
	let arbitraryArrayMenuItems1 = [
	    { payload: '0', text: '银泰商业' },
		{ payload: '1', text: '商业' },
		{ payload: '2', text: '武林店' },
		{ payload: '3', text: '无锡店' },
	];
    return (
    	<div>
	    	<SelectField menuItems={arbitraryArrayMenuItems1} 
				hintText="集团"
				value={this.state.selectValue1}
				onChange={this._handleSelectValueChange1}
				onFocus={this.underlineDisabledStyle}
				style={Selectfield}/>
			<RaisedButton label="查询" backgroundColor={Flatbutton.backgroundColor} style={{minWidth: Flatbutton.width,height:Flatbutton.height,boxShadow:Flatbutton.boxShadow}}/>
      	</div>
    )
  }
});

module.exports = SearchBox4;
/*
<form id="">
        <div className="sits">
          <label>集团</label>
          <select className="form-control-select w2">
            <option>集团</option>
          </select>
        </div>
        <div className="sits">
          <buttom type="submit" className="form-but">查询</buttom>
        </div>
      </form>
*/