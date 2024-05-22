const { log } = require("console");
const http = require ("http")
console.log(http);

// the call back function is a request listener. It takes in two parameters
// the 5000 can be any number
//req means request and res means result. They are also objects ad positional in nature
const server = http.createServer((req, res)=>{
 
    // as soon as what you are sending is done, .end terminate and ends a particular operation
   if(req.url){
        res.writeHead(200, {"content-type": "text/html"})
        res.end()
    }
   res.end("try again")
//    application/json
})

server.listen(5000, ()=>
    {console.log("Server is running");
})

// console.log(server);