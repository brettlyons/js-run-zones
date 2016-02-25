var http = require('http');
var url = require('url');
var staticServer = require('node-static');

var port = process.env.PORT || 3000; // heroku will want to bind the server to $PORT
var file = new(staticServer.Server)();

var server = http.createServer(function (req, res) {
  var urlKeys = url.parse(req.url, true);

  // if(req.method != 'GET'){
  //   return res.end('Send me a GET\n');
  // }

  console.log("PATHNAME: ", urlKeys.pathname);
  console.log("SENT: ", req.url);
  // if (urlKeys.pathname == "/api") {
  //   console.log(req.headers);
  //   console.log(req.authorization);
  // }
  // testing stuffs
  
  // if(req.method == "POST") {
  //   tasks.insert({
  //     //put new task description into db . . .
  //   });
  // } // boilerplate for other methods

  file.serve(req, res);
});

server.listen(port);
