
let React = require('react');
let LoginInfo = require('./LoginInfo');
let Header = React.createClass({
  render() {
    return (
      <div>
        <LoginInfo />
      </div>
    );
  },
});

module.exports = Header;
