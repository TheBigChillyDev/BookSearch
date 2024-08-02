// Requiring module
const express = require('express');

// Creating express object
const app = express();

var books = require('google-books-search');

var bookQuery = null;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Who are you?', name => {
    bookQuery = name;
    console.log(`Hey there ${name}!`);
    books.search(bookQuery, function(error, results) {
        if ( ! error ) {
            //get request for api call results
            app.get('/', (req, res) => { 
                res.send(results) 
                res.end()  
            }) 
        } else {
            console.log(error);
        }
    });
    readline.close();
  });



// app.use(express.static('./ui'));

// Port Number
const PORT = process.env.PORT ||5000;

// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));
