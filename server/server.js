console.log('look ma, my first express app');

// Require Express
// load the express library from node_modules/express
const express = require('express');

const app = express();


// Tell express where to find all of our public files ( aka "client-side" files ) 
// Also called static assets
app.use(express.static('./server/public'));


// Listen for requests
app.listen(5000, function() {
  // Kind of like our onReady function
  console.log('App is running on localhost:5000');
});