/** @jsx React.DOM */

var React = require('react');

var LoginForm = require('./components/login-form');

var ReactComponent = React.renderComponent(
  <LoginForm/>,
  document.querySelector('.c-login-form-wrapper')
);
