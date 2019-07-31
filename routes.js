const routes = require('next-routes')
                                                    // Name   Page      Pattern
module.exports = routes()                           // ----   ----      -----
.add('unidade', '/unidade/:id')                         // unidade   unidade      /unidade/:slug
.add('/home', '/')                         // unidade   unidade      /unidade/:slug
.add('/near', '/')                         // unidade   unidade      /unidade/:slug