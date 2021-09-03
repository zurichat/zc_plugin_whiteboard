const express = require("express");
const http = require("http");
const routes = require('./Routes/router');
const path = require('path')
require("dotenv").config();

//initialize express
const app = express();

//setting up express to parse incoming json body
app.use("/public", express.static("public"));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../whiteboard-client/build')));
app.use(express.urlencoded({ extended: false }));

app.use('/api', routes);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, '../whiteboard-client/build', 'index.html'));
});

// redirect undefined routes
app.use(function(req, res) {
  res.redirect('/');
});

//Error handling
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

//settiing up the server
const PORT = process.env.PORT || 5000;
http.createServer({}, app).listen(PORT, function () {
  console.log(`App listening on port ${PORT}`);
});
