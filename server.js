const express = require("express");
const mongoose = require('mongoose'); 
// const routes = require('./routes');
const path = require("path");
// const dotenv = require('dotenv');
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require('axios');
const firebase = require('firebase');


const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost27017/picaflicDB', { useNewUrlParser: true }); 
// (err) => {
//   if(err) {
//     console.error(err);
//   } else {
//     console.log('Connected, lets do the damn thing');
//   }
// });
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
