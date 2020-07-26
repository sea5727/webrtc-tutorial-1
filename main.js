// var http = require('http')

// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type' : 'text/plain'})
//     res.end("Hello World I'm nodejs\n")
// }).listen(3000, '0.0.0.0');

// console.log('Server running at http://0.0.0.0:3000/')


const express = require('express')

const app = express()
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public');
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');


const port = 3000

app.get('/', (req, res) => {
    res.render('./index.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://0.0.0.0:${port}`)
})