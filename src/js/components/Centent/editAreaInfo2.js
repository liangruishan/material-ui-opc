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
var EditArea2 = React.createClass({
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
        let opens={
        	 margin:'0 auto',
        	 display:'block',
        	 background:'url(build/images/ioc.png) no-repeat center -25px',
        	 width:'22px',
        	 height:'22px',
        	 display:'block',
        	 padding:'5px',
        };
        let shuts={
        	 margin:'0 auto',
        	 display:'block',
        	 background:'url(build/images/ioc.png) no-repeat center -55px',
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
		  onRowSelection={this._onRowSelection}>
		<TableBody
		    deselectOnClickaway={this.state.deselectOnClickaway}
		    showRowHover={this.state.showRowHover}
		    displayRowCheckbox={this.state.displayRowCheckbox}
		    stripedRows={this.state.stripedRows}>
		 	<TableRow selected={false} style={tableheader}>
			    <TableRowColumn width={this.state.width} style={tabletd}>集团SID</TableRowColumn>
			    <TableRowColumn width={this.state.width} style={tabletd}>区域名称</TableRowColumn>
			    <TableRowColumn width={this.state.width} style={tabletd}>集团</TableRowColumn>
			    <TableRowColumn width={this.state.width} style={tabletd}>是否启动</TableRowColumn>
		    </TableRow>
		    <TableRow>
		        <TableRowColumn width={this.state.width} style={tabletd}>1</TableRowColumn>
		        <TableRowColumn width={this.state.width} style={tabletd}>杭州区</TableRowColumn>
		        <TableRowColumn width={this.state.width} style={tabletd}>银泰商业</TableRowColumn>
		        <TableRowColumn width={this.state.width} style={tabletd}>
		        	<span><a href="" style={shuts}></a></span>
		        </TableRowColumn>
		    </TableRow>
		</TableBody>
		<TableFooter>
		</TableFooter>
	</Table>
    )
  }
});

module.exports = EditArea2;
/*<table className="editTable">
        <tbody>
          <tr className="tabNav">
            <td><span>集团SID</span></td>
            <td><span>区域名称</span></td>
            <td><span>集团</span></td>
            <td><span>是否启动</span></td>
          </tr>
          <tr>
            <td><span>1</span></td>
            <td><span>杭州区</span></td>
            <td><span>银泰商业</span></td>
            <td>
              <span className="shut"><a href=""></a></span>
            </td>
          </tr>
        </tbody>
      </table>*/