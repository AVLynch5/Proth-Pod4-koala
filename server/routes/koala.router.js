const { Router } = require('express');
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


// POST
koalaRouter.post('/', (req, res) => {
    let newKoala = req.body;
    console.log('Adding new koala', newKoala);
    let queryText = `INSERT INTO "koalas" ("name", "gender", "age", "ready_to_transfer", "notes")
    VALUES ($1, $2, $3, $4, $5),`;
    pool.query(queryText, [newKoala.name, newKoala.gender, newKoala.age, newKoala.ready_to_transfer, newKoala.notes]).then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error adding new koala', newKoala);
        res.sendStatus(500);
    });
});

// PUT


// DELETE

module.exports = koalaRouter;