//import PG
const pg = require('pg');

//configure PG
module.exports = new pg.Pool({
    database: 'koala_holla',
    host: 'localhost',
    port: '5432',
    max: 10,
    idleTimeoutMillis: 30000
});