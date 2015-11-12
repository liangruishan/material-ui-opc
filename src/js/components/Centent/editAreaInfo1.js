
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
var EditArea1 = React.createClass({
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
				<TableRowColumn width={this.state.width} style={tabletd}>集团名称</TableRowColumn>
				<TableRowColumn width={this.state.width} style={tabletd}>联系人名称</TableRowColumn>
				<TableRowColumn width={this.state.width} style={tabletd}>联系电话</TableRowColumn>
				<TableRowColumn width={this.state.width} style={tabletd}>集团编码</TableRowColumn>
				<TableRowColumn width={this.state.width} style={tabletd}>联系地址</TableRowColumn>
				<TableRowColumn width={this.state.width} style={tabletd}>邮编</TableRowColumn>
				<TableRowColumn width={this.state.width} style={tabletd}>是否启动</TableRowColumn>
		    </TableRow>
		    <TableRow>
		        <TableRowColumn width={this.state.width} style={tabletd}>1</TableRowColumn>
		        <TableRowColumn width={this.state.width} style={tabletd}>银泰集团</TableRowColumn>
		        <TableRowColumn width={this.state.width} style={tabletd}>胡先生</TableRowColumn>
		        <TableRowColumn width={this.state.width} style={tabletd}>010-0000000</TableRowColumn>
		        <TableRowColumn width={this.state.width} style={tabletd}>intime</TableRowColumn>
		        <TableRowColumn width={this.state.width} style={tabletd}>北京市东城区东长安街1号</TableRowColumn>
		        <TableRowColumn width={this.state.width} style={tabletd}>100083</TableRowColumn>
		        <TableRowColumn width={this.state.width} style={tabletd}>
		          <span><a href="" style={opens}></a></span>
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

module.exports = EditArea1;

/*
 <table className="editTable">
        <tbody>
          <tr className="tabNav">
            <td><span>集团SID</span></td>
            <td><span>集团名称</span></td>
            <td><span>联系人名称</span></td>
            <td><span>联系电话</span></td>
            <td><span>集团编码</span></td>
            <td><span>联系地址</span></td>
            <td><span>邮编</span></td>
            <td><span>是否启动</span></td>
          </tr>
          <tr>
            <td><span>1</span></td>
            <td><span>银泰集团</span></td>
            <td><span>胡先生</span></td>
            <td><span>010-0000000</span></td>
            <td><span>intime</span></td>
            <td><span>北京市东城区东长安街1号</span></td>
            <td><span>100083</span></td>
            <td>
              <span className="open"><a href=""></a></span>
              <span className="shut"><a href=""></a></span>
            </td>
          </tr>
        </tbody>
      </table>*/