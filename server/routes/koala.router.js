const express = require('express');
const koalaRouter = express.Router();
const pool = require('../modules/pool');//calls to pool.js module

pool.on('connect', () => {
    console.log('pg connected to postgres!');
}); 

pool.on('error', (error) => {
    console.log('Unable to connect to postgres', error);
});

// DB CONNECTION


// GET

router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "koalas" ORDER BY "name" LIMIT 50;';
    pool.query(queryText).then((result) => {
        // result.rows is the data from our database as an array
        res.send(result.rows);
    }).catch((error) => {
        console.log('There was an error making a query', error);
        res.sendStatus(500);
    })
});

// POST


// PUT


// DELETE

module.exports = koalaRouter;