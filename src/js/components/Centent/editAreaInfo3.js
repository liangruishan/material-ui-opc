
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
  TableRowColumn
   } = require('material-ui');
   let { StylePropable, StyleResizable } = Mixins;
   let { Colors, Spacing, Typography } = Styles;


var EditArea3 = React.createClass({
render() {
		this.state = {
	                     fixedHeader: true,
						  fixedFooter: true,
						  stripedRows: false,
						  showRowHover: false,
						  selectable: false,
						  multiSelectable: false,
						  enableSelectAll: false,
						  displaySelectAll:false,
						  deselectOnClickaway: true,
						  displayRowCheckbox:false,
						  displayBorder:true,
						  width: '30%'
	                };
	    let tableheader={
        	backgroundColor:'#f0f1f6',
        };
        let tabletd={
        	border:'1px solid #c1c8de',
        	textAlign:'center'
        }
    return (
    <Table
		  fixedHeader={this.state.fixedHeader}
		  fixedFooter={this.state.fixedFooter}
		  selectable={this.state.selectable}
		  displaySelectAll={this.state.displaySelectAll}
		  multiSelectable={this.state.multiSelectable}
		  onRowSelection={this._onRowSelection}
		  >
	  	<TableBody
		    deselectOnClickaway={this.state.deselectOnClickaway}
		    showRowHover={this.state.showRowHover}
		    displayRowCheckbox={this.state.displayRowCheckbox}
		    stripedRows={this.state.stripedRows}>
		 	<TableRow selected={false} style={tableheader}>
		    	<TableRowColumn width={this.state.width} style={tabletd}>门店SID</TableRowColumn>
	            <TableRowColumn width={this.state.width} style={tabletd}>门店名称</TableRowColumn>
	            <TableRowColumn width={this.state.width} style={tabletd}>集团</TableRowColumn>
	            <TableRowColumn width={this.state.width} style={tabletd}>区域</TableRowColumn>
	            <TableRowColumn width={this.state.width} style={tabletd}>联系人</TableRowColumn>
	            <TableRowColumn width={this.state.width} style={tabletd}>联系电话</TableRowColumn>
	            <TableRowColumn width={this.state.width} style={tabletd}>门店编码</TableRowColumn>
	            <TableRowColumn width={this.state.width} style={tabletd}>门店地址</TableRowColumn>
	            <TableRowColumn width={this.state.width} style={tabletd}>省份</TableRowColumn>
	            <TableRowColumn width={this.state.width} style={tabletd}>城市</TableRowColumn>
	            <TableRowColumn width={this.state.width} style={tabletd}>地区</TableRowColumn>
	            <TableRowColumn width={this.state.width} style={tabletd}>退货地址</TableRowColumn>
		    </TableRow>
		    <TableRow>
	            <TableRowColumn width={this.state.width} style={tabletd}>1</TableRowColumn>
	            <TableRowColumn width={this.state.width} style={tabletd}>西湖文化广场</TableRowColumn>
	            <TableRowColumn width={this.state.width} style={tabletd}>银泰商业</TableRowColumn>
	            <TableRowColumn width={this.state.width} style={tabletd}>杭州区</TableRowColumn>
	            <TableRowColumn width={this.state.width} style={tabletd}>大四儿</TableRowColumn>
	            <TableRowColumn width={this.state.width} style={tabletd}>010-89384839</TableRowColumn>
	            <TableRowColumn width={this.state.width} style={tabletd}>HZ13</TableRowColumn>
	            <TableRowColumn width={this.state.width} style={tabletd}>北京市东城区东长安街1号</TableRowColumn>
	            <TableRowColumn width={this.state.width} style={tabletd}>北京</TableRowColumn>
	            <TableRowColumn width={this.state.width} style={tabletd}>北京</TableRowColumn>
	            <TableRowColumn width={this.state.width} style={tabletd}>朝阳</TableRowColumn>
	            <TableRowColumn width={this.state.width} style={tabletd}>北京市东城区东长安街1号</TableRowColumn>
		    </TableRow>
	  	</TableBody>
	    <TableFooter>
        </TableFooter>
	</Table>
    )
  }
});

module.exports = EditArea3;
/*
<table className="editTable">
        <tbody>
          <tr className="tabNav">
            <td><span>门店SID</span></td>
            <td><span>门店名称</span></td>
            <td><span>集团</span></td>
            <td><span>区域</span></td>
            <td><span>联系人</span></td>
            <td><span>联系电话</span></td>
            <td><span>门店编码</span></td>
            <td><span>门店地址</span></td>
            <td><span>省份</span></td>
            <td><span>城市</span></td>
            <td><span>地区</span></td>
            <td><span>退货地址</span></td>
          </tr>
          <tr>
            <td><span>1</span></td>
            <td><span>西湖文化广场</span></td>
            <td><span>银泰商业</span></td>
            <td><span>杭州区</span></td>
            <td><span>大四儿</span></td>
            <td><span>010-89384839</span></td>
            <td><span>HZ13</span></td>
            <td><span>北京市东城区东长安街1号</span></td>
            <td><span>北京</span></td>
            <td><span>北京</span></td>
            <td><span>朝阳</span></td>
            <td><span>北京市东城区东长安街1号</span></td>
          </tr>
        </tbody>
      </table>*/