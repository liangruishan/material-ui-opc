
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


var EditArea8 = React.createClass({
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
    };
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
			    	<TableRowColumn width={this.state.width} style={tabletd}>供应商SID</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>供应商编码</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>合同号</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>供应商名称</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>门店SID</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>门店名称</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>联系人</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>联系电话</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>联系地址</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>传真</TableRowColumn>
			    </TableRow>
			    <TableRow>
			    	<TableRowColumn width={this.state.width} style={tabletd}>1</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>23792</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>2256</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>正格体育用品有限公司</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>1</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>西湖文化广场</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>hz13</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>西湖文化广场</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>赵瑞佳</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>1345645654</TableRowColumn>
			    </TableRow>
		  	</TableBody>
		    <TableFooter>
	        </TableFooter>
		</Table>
    )
  }
});

module.exports = EditArea8;
