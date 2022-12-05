const express = require('express')
const app = express()
const port = 5000
var axios = require("axios")
const path = require('path')

app.get('/', (req, res) => {
    console.log(path.join(__dirname, './public'))
    return res.sendFile('public/index.html',{root:__dirname})
})

app.get('/searchWord', (req, res) => {
  console.log(params.search)
    var options = {
        method: 'GET',
        url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/association/',
        params: { entry: req.query.entry },
        headers: {
            'X-RapidAPI-Key': '40df4540e1msh6ff32cb05f3c96cp137cdejsn78fe02f381e3',
            'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com'
        }
    };
    axios.request(options).then(function (response) {
        res.json(response.data)
    }).catch(function (error) {
        console.error(error);
    });
})

app.listen(port, () => {
    console.log(`server running on port ${port} - http://localhost:5000`)
})

// node .\server.js