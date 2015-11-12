
'use strict';

let React = require('react');
let {
  List,
  ListItem,
  leftIcon,
  subheader,
  primaryText,
  initiallyOpen,
  nestedItems,
  Avatar,
  leftAvatar
   } = require('material-ui');
let ContentSend = require('material-ui/lib/svg-icons/content/Mail');
let ContentInbox = require('material-ui/lib/svg-icons/communication/Phone');
var EditArea4Lst1 = React.createClass({
render() {
	let LstS = {
		width:'50%',
		marginRight:'10px',
		border:' #c1c8de solid 1px',
		borderRadius:'2px'
	};
	let ListIs={
		fontSize:'14px',
	};
	let ListItems={
		fontSize:'14px'
	};
    return (
		<div style={LstS}>
			<List>
			  <ListItem primaryText="西湖文化广场" style={ListIs} leftIcon={<ContentInbox />}
			    initiallyOpen={false}
			    nestedItems={[
			      <ListItem primaryText="营业一部" style={ListItems} leftIcon={<ContentSend />}/>,
			      <ListItem primaryText="营业二部" style={ListItems} leftIcon={<ContentSend />}/>,
			      <ListItem primaryText="营业三部" style={ListItems} leftIcon={<ContentSend />}/>,
			      <ListItem primaryText="客服部" style={ListItems} leftIcon={<ContentSend />}/>
			    ]} />
			  <ListItem primaryText="武林文化广场" style={ListIs} leftIcon={<ContentInbox />}
			    initiallyOpen={false}
			    nestedItems={[
			      <ListItem primaryText="营业一部" style={ListItems} leftIcon={<ContentSend />}/>,
			      <ListItem primaryText="营业二部" style={ListItems} leftIcon={<ContentSend />}/>,
			      <ListItem primaryText="营业三部" style={ListItems} leftIcon={<ContentSend />}/>,
			      <ListItem primaryText="客服部" style={ListItems} leftIcon={<ContentSend />}/>
			    ]} />
			  <ListItem primaryText="合肥银泰中心" style={ListIs} leftIcon={<ContentInbox />}
			    initiallyOpen={false}
			    nestedItems={[
			      <ListItem primaryText="营业一部" style={ListItems} leftIcon={<ContentSend />}/>,
			      <ListItem primaryText="营业二部" style={ListItems} leftIcon={<ContentSend />}/>,
			      <ListItem primaryText="营业三部" style={ListItems} leftIcon={<ContentSend />}/>,
			      <ListItem primaryText="客服部" style={ListItems} leftIcon={<ContentSend />}/>
			    ]} />

			</List>
		</div>
)
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
});

module.exports = EditArea4Lst1;
/*<div style={LstS}>
    <dl className="storeslis open">
      <dt style={Dt}><a href=""><span style={Dtspan}>西湖文化广场</span></a></dt>
      <dd style={Dd}>
        <p><a href="" style={Dda}><span>营业一部</span></a></p>
        <p><a href="" style={Dda}><span>营业二部</span></a></p>
        <p><a href="" style={Dda}><span>营业三部</span></a></p>
        <p><a href="" style={Dda}><span>客服部</span></a></p>
      </dd>
    </dl>
    <dl className="storeslis">
      <dt style={Dt}><a href=""><span style={Dtspan}>武林文化广场</span></a></dt>
      <dd style={Dd}>
        <p><a href="" style={Dda}><span>营业一部</span></a></p>
        <p><a href="" style={Dda}><span>营业二部</span></a></p>
        <p><a href="" style={Dda}><span>营业三部</span></a></p>
        <p><a href="" style={Dda}><span>客服部</span></a></p>
      </dd>
    </dl>
    <dl className="storeslis">
      <dt style={Dt}><a href=""><span style={Dtspan}>合肥银泰中心</span></a></dt>
      <dd style={Dd}>
        <p><a href="" style={Dda}><span>营业一部</span></a></p>
        <p><a href="" style={Dda}><span>营业二部</span></a></p>
        <p><a href="" style={Dda}><span>营业三部</span></a></p>
        <p><a href="" style={Dda}><span>客服部</span></a></p>
      </dd>
    </dl>
  </div>*/