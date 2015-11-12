
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


var EditArea4Lst2 = React.createClass({
	getInitialState: function() {
    return { selectValue1: undefined, selectValue2: undefined};
  },
   _handleSelectValueChange1: function(e) {
    this.setState({
      selectValue1: e.target.value
    });
  },
   _handleSelectValueChange2: function(e) {
    this.setState({
      selectValue2: e.target.value
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
		marginRight:'25px',
		width:'100%',
	};
	let Flatbutton = {
		backgroundColor:'#ced3e5',
		width: '40px !important',
		height:'25px',
		boxShadow:'0px',
		float:'right'
	};

	let Selectfield= {
		fontSize:'14px !important',
		marginRight:'25px',
		verticalAlign:'bottom',
		borderColor:'#ced3e5',
		width:'100%'
	};
	let arbitraryArrayMenuItems1 = [
	    { payload: '0', text: '银泰商业' },
		{ payload: '1', text: '商业' },
		{ payload: '2', text: '武林店' },
		{ payload: '3', text: '无锡店' },
	];
	let arbitraryArrayMenuItems2 = [
	    { payload: '0', text: '武林' },
		{ payload: '1', text: '无锡区' },
		{ payload: '2', text: '北京区' },
		{ payload: '3', text: '合肥区' },
	];
	let LstS = {
		width:'50%',
		marginLeft:'10px',
		border:' #c1c8de solid 1px',
		borderRadius:'2px',
		padding:'10px'
	};
    return (
      <div style={LstS}>
		<SelectField menuItems={arbitraryArrayMenuItems1} 
			hintText="集团"
			value={this.state.selectValue1}
			onChange={this._handleSelectValueChange1}
			onFocus={this.underlineDisabledStyle}
			style={Selectfield}/>
		<SelectField menuItems={arbitraryArrayMenuItems2} 
			hintText="门店"
			value={this.state.selectValue2}
			onChange={this._handleSelectValueChange2}
			onFocus={this.underlineDisabledStyle}
			style={Selectfield}/>
		<TextField hintText="专柜编码" underlineFocusStyle={{borderColor:'#c1c8de'}} style={Textfield} />
		<TextField hintText="专柜名称" underlineFocusStyle={{borderColor:'#c1c8de'}} style={Textfield} />
		<TextField hintText="销售编码" underlineFocusStyle={{borderColor:'#c1c8de'}} style={Textfield} />
		<RaisedButton label="查询" backgroundColor={Flatbutton.backgroundColor} style={Flatbutton}/>
      </div>
    )
  }
});

module.exports = EditArea4Lst2;
/*
<ul className="select-lst">
          <li>
            <label>节点SID</label>
            <input type="text" className="form-control"></input>
          </li>
          <li>
            <label>组织名称</label>
            <input type="text" className="form-control"></input>
          </li>
          <li>
            <label>关联集团</label>
            <select className="form-control-select">
              <option>银泰商业</option>
            </select>
          </li>
          <li>
            <label>关联门店</label>
            <select className="form-control-select">
              <option>西湖文化广场</option>
            </select>
          </li>
        </ul>
*/