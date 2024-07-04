// import json server
const jsonServer = require('json-server')
// create server for media player 
const userserver = jsonServer.create()
// create middleware used by JSON Server
const middleware = jsonServer.defaults()
// set up route for json file in sever
const route = jsonServer.router('db.json')
// set up port for running server app
const PORT = 3000 || process.env.PORT

userserver.use(middleware)
userserver.use(route)
userserver.listen(PORT,()=>{console.log(`User-Server started at port ${PORT} and waiting for client request`)})