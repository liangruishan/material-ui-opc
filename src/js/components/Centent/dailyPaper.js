
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


var dailyPaper = React.createClass({
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
			  width: '30%',
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
			    	<TableRowColumn width={this.state.width} style={tabletd}>日报</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>2015.10.10</TableRowColumn>
			    </TableRow>
			    <TableRow>
			    	<TableRowColumn width={this.state.width} style={tabletd}>门店名称</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>866</TableRowColumn>
			    </TableRow>
			    <TableRow>
			    	<TableRowColumn width={this.state.width} style={tabletd}>开店数量</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>杭州文化广场店</TableRowColumn>
			    </TableRow>
			    <TableRow>
			    	<TableRowColumn width={this.state.width} style={tabletd}>店铺活跃数量</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>12</TableRowColumn>
			    </TableRow>
			    <TableRow>
			    	<TableRowColumn width={this.state.width} style={tabletd}>当天订单数</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>20</TableRowColumn>
			    </TableRow>
			    <TableRow>
			    	<TableRowColumn width={this.state.width} style={tabletd}>当天订单金额</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>3464.690</TableRowColumn>
			    </TableRow>
			    <TableRow>
			    	<TableRowColumn width={this.state.width} style={tabletd}>当周订单数</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>346</TableRowColumn>
			    </TableRow>
			    <TableRow>
			    	<TableRowColumn width={this.state.width} style={tabletd}>当周订单金额</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>67000</TableRowColumn>
			    </TableRow>
		  	</TableBody>
		    <TableFooter>
	        </TableFooter>
		</Table>

      /*<div className="cbor">
        <p className="bortop"></p>
        <div className="contable">
          <table className="boxtab">
            <thead>
              <tr>
                <td>日报</td>
                <td>2015.10.10</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>门店名称</td>
                <td>杭州文化广场店</td>
              </tr>
              <tr>
                <td>开店数量</td>
                <td>866</td>
              </tr>
              <tr>
                <td>店铺活跃数量</td>
                <td>12</td>
              </tr>
              <tr>
                <td>当天订单数</td>
                <td>20</td>
              </tr>
              <tr>
                <td>当天订单金额</td>
                <td>3464.690</td>
              </tr>
              <tr>
                <td>当周订单数</td>
                <td>346</td>
              </tr>
              <tr>
                <td>当周订单金额</td>
                <td>67000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="borbot"></p>
      </div>*/
    )
  }
});

module.exports = dailyPaper;
