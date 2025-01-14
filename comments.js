// Create web server
const express = require('express');
const app = express();
// Create a port for the web server
const PORT = 3000;
// Create path for comments
const comments = require('./comments');
// Create path for bodyParser
const bodyParser = require('body-parser');
// Use bodyParser
app.use(bodyParser.json());
// Create a route for comments
app.get('/comments', function(request, response) {
  response.json(comments);
});
// Create a route for comments by ID
app.get('/comments/:id', function(request, response) {
  response.json(comments[request.params.id]);
});
// Create a route to create a new comment
app.post('/comments', function(request, response) {
  const comment = request.body;
  const id = comments.length;
  comments.push(comment);
  response.json(id);
});
// Create a route to update a comment
app.put('/comments/:id', function(request, response) {
  const id = request.params.id;
  comments[id] = request.body;
  response.json(id);
});
// Create a route to delete a comment
app.delete('/comments/:id', function(request, response) {
  const id = request.params.id;
  comments.splice(id, 1);
  response.json(id);
});
// Get the web server to listen to the port
app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
});