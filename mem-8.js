const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/') {
        res.end('Hello World')
    }

    if(req.url === '/about') {
        res.end('Hello about')
    }

    res.end(`
        <h1>Oops</h1>
        <a href="/"> homepage </a>
    `)
})

server.listen(5000)