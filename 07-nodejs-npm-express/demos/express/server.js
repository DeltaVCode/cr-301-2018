console.log('Hello from server.js via nodemon!')

var cowsay = require("cowsay");


// Load Express
const express = require('express');

// Instantiate Express so that we can use its functionality
const app = express();

// Designate a port to serve our app on
const PORT = 3000;

// Home page!
app.get('/', (req, res) => {
  console.log(`${req.method} ${req.path}`);
  console.log(req.headers);
  // res.send('Hello, world!');

  res.sendFile('public/index.html', { root: '.' });
});

// Define which directory we will serve files from
app.use(express.static('./public'));

// Here is one way to set up a route... bats...
app.get('/bats', (req,res) => {
  console.log('Damn bats')
  res.sendFile('public/bat-country.html', { root: '.' });
});

// Here is our sneaky secret 'weasels' route...
app.get('/weasels', (req,res) => {
  res.send('OMG weasels everywhere!');
});

// Let's 404 everything except for our routes and index.html
app.get('*', (req,res) => {
  res.status(404);
  res.sendFile('404.html', { root: './public' });
});

// Now let's tell the app to listen so that it can do its thing

app.listen(PORT, () => {
  console.log(cowsay.say({
    text : `Server is running on port ${PORT}!`
  }));
});
