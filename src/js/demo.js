
let React = require('react');
let mui = require('material-ui');
let RaisedButton = mui.RaisedButton;
let Dialog = mui.Dialog;
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;
let {Card, CardMedia, CardActions, FlatButton, Avatar,CardHeader, CardTitle, CardText} = mui;
let Router = require('react-router');
let SearchBox1 = require('./components/Centent/searchBoxInfo1');          //search 集团资料 
let SearchBox2 = require('./components/Centent/searchBoxInfo2');          //search 区域管理
let SearchBox3 = require('./components/Centent/searchBoxInfo3');          //search 门店资料 
let SearchBox4 = require('./components/Centent/searchBoxInfo4');          //search 组织机构管理
let SearchBox5 = require('./components/Centent/searchBoxInfo5');          //search 专柜管理
let SearchBox6 = require('./components/Centent/searchBoxInfo6');          //search 基本资料
let SearchBox7 = require('./components/Centent/searchBoxInfo7');          //search 销售编码管理
let SearchBox8 = require('./components/Centent/searchBoxInfo8');          //search 供应商管理

let EditArea1 = require('./components/Centent/editAreaInfo1');             //table 集团资料
let EditArea2 = require('./components/Centent/editAreaInfo2');             //table 区域管理
let EditArea3 = require('./components/Centent/editAreaInfo3');             //table 门店资料
let EditArea4Lst1 = require('./components/Centent/editAreaInfo4Lst1');     //table 组织机构管理
let EditArea4Lst2 = require('./components/Centent/editAreaInfo4Lst2');     
let EditArea5 = require('./components/Centent/editAreaInfo5');             //table 专柜管理
let EditArea6 = require('./components/Centent/editAreaInfo6');             //table 基本资料
let EditArea7 = require('./components/Centent/editAreaInfo7');             //table 销售编码管理
let EditArea8 = require('./components/Centent/editAreaInfo8');             //table 供应商管理
let DailyPaper = require('./components/Centent/dailyPaper'); 
let ContentInfo = require('./components/Centent/ContentInfo'); 
let {Link} = Router;
let MainPage = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme(),
    };
  },

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500,
    });
  },

  render() {
    let containerStyle = {
      paddingTop: '80px',
      width: '100%'
    };

    let standardActions = [
      { text: '确定' },
    ];
    let contentMain = {
    	padding:'10px 20px',
    };
    let searchBox={
    	background:'#f0f1f6',
    	padding:'0 10px',
    };
    let editArea={
    	paddingTop:'20px',
    };
    let editLst={
    	width:'100%',
    	display:'-moz-box',
		display:'-ms-flexbox',
		display:'-webkit-box',  
		display:'-webkit-flex', 	
		display:'-moz-flex',
		display:'flexbox',
		display:'flex',
    };

    var card = null;

    return (

      <div style={containerStyle}>
        <div className="opcContent">
            <ContentInfo/>
            <section style={contentMain}>
              /*集团资料*/
              <div style={searchBox}>
                <SearchBox1/>
              </div>
              <div style={editArea}>
                <EditArea1/>
              </div>
              /*区域管理*/
              <div style={searchBox}>
                <SearchBox2/>
              </div>
              <div style={editArea}>
                <EditArea2/>
              </div>
              /*门店资料*/
              <div style={searchBox}>
                <SearchBox3/>
              </div>
              <div style={editArea}>
                <EditArea3/>
              </div>
              /*组织机构管理*/
              <div style={searchBox}>
                <SearchBox4/>
              </div>
              <div style={editArea}>
                <section style={editLst}>
                  <EditArea4Lst1/>
                  <EditArea4Lst2/>
                </section>
              </div>
              /*专柜管理*/
              <div style={searchBox}>
                <SearchBox5/>
              </div>
              <div style={editArea}>
                <EditArea5/>
              </div>
              /*集团资料*/
              <div style={searchBox}>
                <SearchBox6/>
              </div>
              <div style={editArea}>
                <EditArea6/>
              </div>
              /*销售编码管理*/
              <div style={searchBox}>
                <SearchBox7/>
              </div>
              <div style={editArea}>
                <EditArea7/>
              </div>
              /*供应商管理*/
              <div style={editArea}>
                <SearchBox8/>
              </div>
              <div style={editArea}>
                <EditArea8/>
              </div>
              /*日报*/
              <div style={editArea}>
                <DailyPaper/>
              </div>
            </section>
          </div>

      </div>
    );
  },

  _handleTouchTap() {
    this.refs.superSecretPasswordDialog.show();
  },

});

module.exports = MainPage;
