const Pool = require("pg").Pool

const pool = new  Pool(
    {
        user : "postgres",
        password: "dali@20#22",
        host: "localhost",
        port: 5432,
        database : "notes"

    }
)

module.exports  = pool