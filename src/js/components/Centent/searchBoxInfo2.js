
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


var SearchBox2 = React.createClass({
	 getInitialState: function() {
    return { selectValue: undefined};
  },
   _handleSelectValueChange: function(e) {
    this.setState({
      selectValue: e.target.value
    });
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
		verticalAlign:'top',
		borderColor:'#c1c8de'
	};
	let arbitraryArrayMenuItems = [
	    { payload: '0', text: '集团' },
		{ payload: '1', text: '商业' },
		{ payload: '2', text: '武林店' },
		{ payload: '3', text: '无锡店' },
	];
     
    return (
    	<div>
			<SelectField menuItems={arbitraryArrayMenuItems} 
				hintText="商业"
				value={this.state.selectValue}
				onChange={this._handleSelectValueChange}
				underlineFocusStyle={{borderColor:Selectfield.borderColor}}
				style={Selectfield} />
			<TextField hintText="区域名称" underlineFocusStyle={{borderColor:'#c1c8de'}} style={Textfield} />
			<RaisedButton label="查询" backgroundColor={Flatbutton.backgroundColor} style={{minWidth: Flatbutton.width,height:Flatbutton.height,boxShadow:Flatbutton.boxShadow}}/>
		</div>

    )
  }
});

module.exports = SearchBox2;
/*<form id="">
        <div className="sits">
          <label>集团</label>
          <select className="form-control-select w2">
            <option>商业</option>
          </select>
        </div>
        <div className="sits">
          <label>区域名称</label>
          <input type="text" value="" className="form-control w2"></input>
        </div>
        <div className="sits">
          <buttom type="submit" className="form-but">查询</buttom>
        </div>
      </form>
*/