const express = require('express');
const app = express();
const path = require("path");



app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'js')));

// view engine setup
app.set("view engine", "ejs");


app.get('/', (req, res) => {
    res.render('homepage');
});

app.listen(3000);
