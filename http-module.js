const { readFile, writeFile } = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our home page')
    }
    if (res.url === '/about') {
        res.end('here is our brief history')
    }

    res.end(`<h1>Ooops!</h1>
    <p>we can seems to find the page you are looking for</p>
    <a href="/">back home</a>`)
})

server.listen(5000)