// Requiring module
const express = require('express');

// Creating express object
const app = express();

var books = require('google-books-search');

/*books.search('Professional JavaScript for Web Developers', function(error, results) {
    if ( ! error ) {
        console.log(results);
    } else {
        console.log(error);
    }
});*/



// Handling GET request
app.get('/', (req, res) => { 
    res.send('ui\ooksearch\src\app\app.component.html') 
    res.end()  
}) 



app.use(express.static('ui\booksearch\src\app\app.component.html'));

// Port Number
const PORT = process.env.PORT ||5000;

// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));
