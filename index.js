/*const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");

// Port
let port = process.env.PORT || 5000;

// Take the permission from express for json data (postman)
app.use(express.json());

// Use bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

// to avoid cors header error
app.use(cors());

app.get('/find_symbols_in_names',(req, res) => {
    
    // let obj = (req.body);             // frontend data

    let obj = {
        chemicals: [ 'Amazon', 'Microsoft', 'Google' ], 
        symbols: [ 'I', 'Am', 'cro', 'Na', 'le', 'abc' ]
    };

    // Write Algorithm here
    let array = [];
    obj.chemicals.map((chemical) => {
        obj.symbols.map((Symbols) => {
            if(chemical.includes(symbols)){
                array.push(chemical);
            }
        })
    })
    console.log(array);
    res.send(array)


    //res.json(newObj);    
})

// Listen
app.listen(port,()=> 
{
    console.log(`Server started at port 5000`);
});*/


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const { json } = require('body-parser');

// Port
let port = process.env.PORT || 5000;

// Take the permission from express for json data (postman)
app.use(express.json());

// Use bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

// to avoid cors header error
app.use(cors());
app.get('/find_symbols_in_names', (req, res) => {

    // let obj = (req.body); // frontend data

    let obj = {
        chemicals: ['Amazon', 'Microsoft', 'Google'],
        symbols: ['I', 'Am', 'cro', 'Na', 'le', 'abc']
    };
    let array = [];
    obj.chemicals.map((chemical) => {
        obj.symbols.map((symbols) => {
            if (chemical.includes(symbols)) {
                array.push(chemical);
            }
        })

    })
    console.log(array);
    res.send(array);
})

// Listen
app.listen(port, () => {
    console.log(`Server started at port 5000`);
});