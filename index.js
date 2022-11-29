const express  = require("express")

const server = express()

const handleAllTypesOfRequest =(req,res)=> {
    res.send("Response from server")
}
const handleGetRequest =(req,res)=> {
    res.send("Responded to get request page")
}
const handlePutRequest =(req,res)=> {
    res.send("Responded to put request page")
}
const handlePostRequest =(req,res)=> {
    res.send("Responded to post request page")
}

server.post('/profile',handleAllTypesOfRequest);
server.get('/put',handlePutRequest)
server.get('/get',handleGetRequest)
server.get('/post',handlePostRequest)

server.listen(3000, () => console.log('server is ready'))