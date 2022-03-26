'use strict';
const express = require('express');
const path = require('path');
const logger = require('morgan');
const movies = require('./movies.json');

const app = express();
app.use(logger('dev'));
app.use(express.static('public'));

app.get('/movies', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.send(JSON.stringify(movies));
});

app.get('/movies/:id', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.send(movies.filter(movie => movie.id === req.params.id));
});

app.get('/movies/title/:title', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.send(movies.filter(movie => {
            const titleParamLowercase = req.params.title.toLocaleLowerCase();
            const currentTitleLowercase = movie.title.toLocaleLowerCase();
            return currentTitleLowercase.includes(titleParamLowercase)
        }
    ));
});

app.get('/movies/released/:released', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.send(movies.filter(movie => movie.released === req.params.released));
});

app.listen(3000, function () {
    console.log(`app listening on port ${3000}!`);
});

app.get("/", (req, res) => {
    res.sendFile("/index.html");
});

module.exports = app;
