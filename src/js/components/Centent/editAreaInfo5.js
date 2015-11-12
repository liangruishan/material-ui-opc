
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


var EditArea5 = React.createClass({
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
        let edits={
        	 margin:'0 auto',
        	 display:'block',
        	 background:'url(build/images/ioc.png) no-repeat center 5px',
        	 width:'22px',
        	 height:'22px',
        	 display:'block',
        	 padding:'5px',
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
			    	<TableRowColumn width={this.state.width} style={tabletd}>门店SID</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>专柜名称</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>专柜编码</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>所属集团</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>所属门店</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>营业部门</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>联系电话</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>状态</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>编辑</TableRowColumn>
			    </TableRow>
			    <TableRow>
			    	<TableRowColumn width={this.state.width} style={tabletd}>1</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>耐克</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>00215</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>银泰商业</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>西湖文化广场</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>营业一部</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>未撤柜</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}></TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>
		            	<span><a href="" style={edits}></a></span>
				    </TableRowColumn>
			    </TableRow>
		  	</TableBody>
		    <TableFooter>
	        </TableFooter>
		</Table>
    )
  }
});

module.exports = EditArea5;
