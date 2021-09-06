const express = require("express");
const http = require("http");
const path = require('path');
require("dotenv").config();

//initialize express
const app = express();

//setting up express to parse incoming json body
app.use("/public", express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../whiteboard-client/build')));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../whiteboard-client/build/index.html'));
});

// ///////Whiteboard download
app.use(express.static(path.join(__dirname, 'downloader')));

app.get('/download', (req, res) => {
  res.sendFile(path.join(__dirname,'downloader', 'downloadtest.html'));
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
const PORT = process.env.PORT || 4400;
http.createServer({}, app).listen(PORT, function() {
    console.log(`App listening on port ${PORT}`);
});
