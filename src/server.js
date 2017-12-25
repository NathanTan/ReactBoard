import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import position from './reducers/Position.js'
import inital from './reducers/Inital'
import express from 'express'
import ReactDOMServer from 'react-dom/server'

var app = express();
//App = React.createFactory(require('./App'));

console.log("Server is up")

//Serve static files
app.use('/static', express.static('static'))





handleRender = (req, res) => {
  console.log("Creating Request")
    //Create a new Redux store instance for every incomming request
    const store = createStore(intial)
    
        //Reder the component to a string
        const html = renderToString(
            <Provider store={store}>
                <App />
            </ Provider>
        )
    
        //Grab inital state from Redux store
        const preloadedState = store.getState()
    
        //Send the rendered page back to the client
        res.send(renderFullPage(html, preloadedState))
    
}

renderFullPage = (html, preloadedState) => {
    function renderFullPage(html, preloadedState) {
        return `
          <!doctype html>
          <html>
            <head>
              <title>Redux Universal Example</title>
            </head>
            <body>
              <div id="root">${html}</div>
              <script>
                // WARNING: See the following for security issues around embedding JSON in HTML:
                // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
              </script>
              <script src="/static/bundle.js"></script>
            </body>
          </html>
          `
      }
}




app.use(handleRender)



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
