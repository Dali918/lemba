const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const pool = require("./db")
//set up get api rouute to with response



app.get("/api", (req, res) => {
    res.json({ users: ["userOne", "userTwo", "userThree"] });
});

//ROUTES

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});

