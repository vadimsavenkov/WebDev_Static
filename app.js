// import modules
const path = require('path');
const express = require('express');

// initialize moment in command line
const moment = require('moment');
const today = moment(); 
console.log(today.format('YYYY'));


// Custom module paths start with './' -> current directory 
const destinations = require('./destinations');

// create express app
const app = express();
app.set('view engine', 'ejs');

// automatically check if requested file is found in /public. If yes, return that file as a response to the browser
app.use(express.static(path.join(__dirname, 'public')));

 app.get('/', function(request, response){
   response.render('index',{});
 })

app.get('/login', function(request, response){
  response.render('login',{});
})

app.get('/register', function(request, response){
  response.render('register',{});
})

app.get('/gallery', function(request, response){
  response.render('gallery',{});
})

// Display an individual destination gallery page when someone browses to an ID
app.get('/:id', function(request, response){

// Find the specific destination in our module using array.find()
const destination = destinations.find(function(item) {
  return item.id === parseInt(request.params.id);
});

// Check for IDs that are not in our list
if (!destination) {
  return response.send('Invalid ID');
}

//  We now pass our destination object into our view (the 2nd object must be an object)
  response.render('destinations',destination);
});

// if no file or endpoint found, send a 404 error as a response to the browser
app.use(function(req, res, next) {
  res.status(404);
  res.render('404', {page:"404"});
});

// add current year using moment module
const yearFormat="YYYY"
app.locals.moment = moment;
app.locals.yearFormat = yearFormat;


// start up server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});