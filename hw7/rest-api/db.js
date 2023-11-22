const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "hw7",
    password: "",
    port: 5432,
});

module.exports = pool;
