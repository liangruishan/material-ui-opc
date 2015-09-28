'use strict';

let React = require('react');
let ModuleNav = require('./ModuleNav');
let mergeAndPrefix = require('material-ui/lib/utils/styles');
let { Menu, Mixins, Styles } = require('material-ui');
let { Spacing, Colors } = Styles;
let { StyleResizable, StylePropable } = Mixins;

let Router = require('react-router');
let RouteHandler = Router.RouteHandler;
var MainNav = React.createClass({
  mixins: [StyleResizable, StylePropable],

  propTypes: {
    modules: React.PropTypes.array.isRequired
  },

  getStyles(){
    let subNavWidth = Spacing.desktopKeylineIncrement * 3 + 'px';
    let styles = {
      root: {
        //paddingTop: Spacing.desktopKeylineIncrement + 'px'
        paddingTop: '0px',
      },
      rootWhenMedium: {
        position: 'relative'
      },
      secondaryNav: {
        borderTop: 'solid 1px ' + Colors.grey300,
        overflow: 'hidden',
        textAlign: 'center',
      },
      content: {
        boxSizing: 'border-box',
        padding: Spacing.desktopGutterMini + 'px',
        //maxWidth: (Spacing.desktopKeylineIncrement * 14) + 'px',
      },
      secondaryNavWhenMedium: {
        borderTop: 'none',
        position: 'absolute',
        top: '4px',
        width: subNavWidth,
      },
      contentWhenMedium: {
        marginLeft: subNavWidth,
        borderLeft: 'solid 1px ' + Colors.grey300,
        minHeight: '800px'
      }
    };

    if (this.isDeviceSize(StyleResizable.statics.Sizes.MEDIUM) ||
    this.isDeviceSize(StyleResizable.statics.Sizes.LARGE)) {
      styles.root = this.mergeStyles(styles.root, styles.rootWhenMedium);
      styles.secondaryNav = this.mergeStyles(styles.secondaryNav, styles.secondaryNavWhenMedium);
      styles.content = this.mergeStyles(styles.content, styles.contentWhenMedium);
    }

    return styles;
  },

  render() {

    let modules = [
      {
        id: 1001,
        name: '订单中心',
        menus:[
          {
            id: 11,
            name: '订单管理',
            menus:[
              {
                id: 1,
                name: '打印销售单',
                handler: 'main'
              },
              {
                id: 2,
                name: '物流入库',
                handler: 'main'
              }
            ]
          },
          {
            id: 2,
            name: '财务审核',
            menus:[
              {
                id: 3,
                name: '退货付款确认',
                handler: 'main'
              },
              {
                id: 4,
                name:'销售明细统计',
                handler: 'main'
              }
            ]
          }
        ]
      },
      {
        id: 2000,
        name: '运营中心',
        menus:[
          {
            id: 3,
            name: '拍照计划',
            menus:[
              {
                id: 5,
                name: '计划制定',
                handler: 'main'
              },
              {
                id: 6,
                name: '未拍照商品查询',
                handler: 'main'
              }
            ]
          },
          {
            id: 4,
            name: '图片上传',
            menus:[
              {
                id: 7,
                name: '图片上传',
                handler: 'main'
              },
              {
                id: 8,
                name:'重现上传',
                handler: 'main'
              },
              {
                id: 9,
                name: '测试',
                handler: 'demo'
              },
              {
                id: 10,
                name: '小四儿',
                handler: 'main'
              },
              {
                id: 11,
                name:'wallace',
                handler: 'main'
              },
              {
                id: 12,
                name: '啊啊啊',
                handler: 'demo'
              }
            ]
          }
        ]
      },
    ];

    let navs = [];
    let mds = this.props.modules || modules;
    mds.map((nv)=>{
      navs.push(
        <ModuleNav key={'main_nav_'+nv.id} nav={nv} />
      );
    });

    let styles = this.getStyles();
    return (
      <div style={styles.root}>
        <div style={styles.content}>
          <RouteHandler />
        </div>
        <div style={styles.secondaryNav}>
          {navs}
        </div>
      </div>
    );
  },
});

module.exports = MainNav;
