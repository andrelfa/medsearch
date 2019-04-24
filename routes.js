const routes = require('next-routes')
                                                    // Name   Page      Pattern
module.exports = routes()                           // ----   ----      -----
.add('unidade', '/unidade/:id')                         // blog   blog      /blog/:slug