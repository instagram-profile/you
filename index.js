const express = require('express')
const server = express();
const cors = require('cors')
const bp = require('body-parser')
const fs = require('fs')
const PORT = process.env.PORT || 3000;

server.use(cors())
server.use(bp.json())

server.use('/', express.static(__dirname + '/public'));

server.post('/data', (req, res) => {

    const dataToStore = JSON.stringify(req.body) + '|'
    console.log(dataToStore)

    fs.appendFileSync(__dirname + '/data.txt', dataToStore)
    res.json({ response: 'Received' })
})

function ls(path) {
    fs.readdir(path, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        files.forEach(function (file) {
            console.log(file);
        });
    });
}

server.get('/userData', (req, res) => {
    let data = fs.readFileSync(__dirname + '/data.txt', 'utf8')
    data = data.split('|')
    data.pop()
    res.json(data)
})

server.listen(PORT, () => {
    console.log(`Server started on port<${PORT}>`)
});