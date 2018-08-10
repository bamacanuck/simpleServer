const http = require('http');

//establish server object

http.newServer((req, res) => {
    // issue response
    res.write("Here's your framework-less server, bub.");
    // end response
    res.end();
}).
    // set server (server object) to "listen"
    listen(3000, () => {
        // note server (server object) is "listening"
        console.log("... server started... listening on port 3000...");
    })