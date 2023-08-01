// Create web server 
// Run this file using node comments.js
// Go to http://localhost:8080/comments to see the comments
// Go to http://localhost:8080/form to add a comment

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Use the public directory to serve static files
app.use(express.static(__dirname + '/public'));

// Use body-parser to parse the body of the POST request
app.use(bodyParser.urlencoded({ extended: false }));

// Set up the view engine
app.set('view engine', 'ejs');

// Use an array to store the comments
var comments = [];

// Set up the route to handle GET request
app.get('/comments', function(req, res) {
    res.render('comments', { comments: comments });
});

// Set up the route to handle POST request
app.post('/comments', function(req, res) {
    // Get the comment from the POST body
    var comment = req.body.comment;
    // Add the comment to the comments array
    comments.push(comment);
    // Redirect back to the comments page
    res.redirect('/comments');
});

// Set up the route to handle GET request
app.get('/form', function(req, res) {
    res.render('form');
});

// Start the server
app.listen(8080);
console.log('Server is running at http://localhost:8080');
