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
/**
 * @api {PUT} /koalas/:id
 * @apiDescription Changes ready_to_transfer status to Y
 * for matches to id provided
 * 
 * @apiParam{number} id The id of the koala ready to transfer
 */
koalaRouter.put('/:id', (req, res) => {
    console.log('In put, req.params: ', req.params);
    const koalaId = req.params.id;
    const queryText = `UPDATE "koalas" 
                        SET "ready_to_transfer" = 'Y' 
                        WHERE "id" = $1;`;
    pool.query(queryText, [koalaId]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in PUT: ', error);
        res.sendStatus(500);
    });
})



// DELETE

module.exports = koalaRouter;