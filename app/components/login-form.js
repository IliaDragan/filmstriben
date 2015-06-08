/** @jsx React.DOM */

var React = require('react');

var LoginForm = React.createClass({
  render: function() {
    return (
      <div className="c-login-form">
        <form method="post">
          <div className="c-login-form__input-wrapper">
            <input type="text" className="c-login-form__input c-login-form__input--username"/>
          </div>
          <div className="c-login-form__input-wrapper">
            <input type="password" className="c-login-form__input c-login-form__input--password"/>
          </div>
          <input type="submit" value="Login" className="c-login-form__button c-login-form__button--submit"/>
        </form>
      </div>
    );
  }
});

module.exports = LoginForm;
