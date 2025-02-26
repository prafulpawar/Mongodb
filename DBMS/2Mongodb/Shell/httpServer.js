const http = require('http');

const server = http.createServer((req,res)=>{
    res.end("Hello, World\n");
})

server.listen(3000,()=>{
   console.log(`Server Is Running On ${3000}`)
})

