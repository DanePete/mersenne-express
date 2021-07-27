console.log('look ma, my first express app');

// Require Express
// load the express library from node_modules/express
const express = require('express');

const app = express();

// Listen for requests
app.listen(5000, function() {
  // Kind of like our onReady function
  console.log('App is running');
})