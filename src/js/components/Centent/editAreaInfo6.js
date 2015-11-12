
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



var EditArea6 = React.createClass({
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
        let colImg={
        	 width:'80px',
        	 height:'80px',
        	 margin:'auto',
        	 display:'block'
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
			    	<TableRowColumn width={this.state.width} style={tabletd}>品牌SID</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>品牌中文名称</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>品牌中文名称</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>品牌大图</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>品牌小图</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>品牌描述</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>品牌尺码表</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>编辑</TableRowColumn>
			    </TableRow>
			    <TableRow>
			    	<TableRowColumn width={this.state.width} style={tabletd}>1</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>耐克</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>NIKE</TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>
			            <span style={colImg}><a href="">img</a></span>
		            </TableRowColumn>
		            <TableRowColumn width={this.state.width} style={tabletd}>
		            	<span style={colImg}><a href="">img</a></span>
		            </TableRowColumn>
            		<TableRowColumn width={this.state.width} style={tabletd}>复古花纹</TableRowColumn>
            		<TableRowColumn width={this.state.width} style={tabletd}>
            			<span style={colImg}><a href="">img</a></span>
            		</TableRowColumn>
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

module.exports = EditArea6;
/*

          <tr>
            <td><span>1</span></td>
            <td><span>耐克</span></td>
            <td><span>NIKE</span></td>
            <td><span className="col-img"><a href="">img</a></span></td>
            <td><span className="col-img"><a href="">img</a></span></td>
            <td><span>复古花纹</span></td>
            <td><span className="col-img"><a href="">img</a></span></td>
            <td><span className="edit"><a href=""></a></span></td>
          </tr>
        </tbody>
      </table>
*/