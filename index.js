//  import you http 

const http = require("http")



// create server with http

const server = http.createServer((req, res) =>{
    console.log("Server is created")
})

// initiate port

const PORT = 4000;



// listen to server

server.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))