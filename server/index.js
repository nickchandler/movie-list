//import express framework
const express = require('express');
const path = require('path');


//set PORT# to listen on
const PORT = 3000;

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
]



//create server
const app = express();

app.get('/movies', (req, res) => {
  res.send((movies));
})
//serve static files
app.use(express.static(path.join(__dirname, '../client/dist')))


//start server
app.listen(PORT, () => console.log('Express server started on' , PORT));