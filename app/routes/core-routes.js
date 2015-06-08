var React = require('react/addons');
var LoginForm = React.createFactory(require('../components/login-form'));

module.exports = function(app) {

  app.get('/', function(req, res) {
    // React.renderToString takes your component
    // and generates the markup
    var reactHtml = React.renderToString(LoginForm({}));
    // Output html rendered by react
    // console.log(myAppHtml);
    res.render('index.ejs', {
      loginFormOutput: reactHtml
    });
  });

};
