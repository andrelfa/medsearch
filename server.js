// server.js
const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)

// With express
const express = require('express')
app.prepare().then(() => {
  const server = express();

  server.get("/unidade/:id", (req, res) => { 
    return app.render(req, res, "unidade", { id: req.params.id }); 
  });

  express().use(handler).listen(3000)
})