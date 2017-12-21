var express = require('express')
var app = express();
var React = require('react')
var ReactDOMServer = require('react-dom/server');
App = React.createFactory(require('./App'));

app.get('/', function(req, res) {

   var html = ReactDOMServer.renderToStaticMarkup(body(null,
	 div({id: 'content', dangerouslySetInnerHTML: {_html:
	    ReactDOMServer.renderToString(App({/*empty props*/}))
	 }})
	 ))
      res.send(html)
   //   res.send(ReactDOMServer.renderToString(<Component />));
   //res.send('Hello World')
})

app.listen(3000)
