
'use strict';

let React = require('react');


var ContentInfo = React.createClass({
render() {
	let ContentNav = {
		backgroundColor:'#f0f1f6',
		paddingTop:'10px',
		paddingBottom:'10px',
		paddingLeft:'20px',
		paddingRight:'20px'
	};
	let Navli={
		color:'#171717',
		paddingRight:'10px'
	};



    return (
      <nav style={ContentNav}>
        <a href="" style={Navli}><span>返回</span></a>
        <a href="" style={Navli}><span>增加</span></a>
        <a href="" style={Navli}><span>编辑</span></a>
        <a href="" style={Navli}><span>删除</span></a>
        <a href="" style={Navli}><span>是否启用</span></a>
        <a href="" style={Navli}><span>导出</span></a>
        <a href="" style={Navli}><span>保存</span></a>
      </nav>



    )
  }
});

module.exports = ContentInfo;
