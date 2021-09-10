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


// PUT
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