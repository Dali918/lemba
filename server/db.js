//connect server to database
const Pool = require("pg").Pool

const pool = new  Pool(
    {
        user : "postgres",
        password: "lemba_postgres_password",
        host: "localhost",
        port: 5432,
        database : "notes"
    }
)

module.exports  = pool