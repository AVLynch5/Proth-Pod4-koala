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


// DELETE by Mo

// idea DELETE BELOW ↓↓ 

/**
 * @api {delete} /koalas/:id (delete koala)
 * @apiDescription This will delete a specific koala
 * from the database on delete button press by user - BY ID
 * @apiParam {Number} id - the id of the koala we want to delete
 */
koalaRouter.delete('/:id', (req, res) => {
    console.log(req.params);
    const koalaID = req.params.id;
    const queryText = 'DELETE FROM "koalas" WHERE "id" = $1;';
    pool.query(queryText, [koalaID]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in /koalas DELETE on koala.router.js', error);
        res.sendStatus(500)
    })
})

// idea delete complete  ↑↑ 


module.exports = koalaRouter;