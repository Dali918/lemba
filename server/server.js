const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const chalk = require('chalk')
const pool = require("./db") //require that databse be connected from db.js
const cors = require("cors")
const debug   =  require('debug')('app')
const morgan  = require("morgan")



//middleware
app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))
// app.use(helmelt())
// app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"})) 
//allows use to use req.body
//set up get api rouute to with response



app.get("/api", (req, res) => {
    res.json({ users: ["userOne", "userTwo", "userThree"] });
});

//ROUTES


//create a note
app.post("/notes", async (req, res) => {
    try {
        const { description } = (req.body)  //get the description using object destructuring
        const newNote = await pool.query("INSERT INTO text_note (description) VALUES($1) RETURNING *", [description]) //INSERT INTO command with specific table and column you are trying to insert into
        res.json(newNote.rows[0]) //response is all the notes
    } catch (err) {
        console.log(err.message)
    }
})
//get all notes

app.get("/notes", async (req, res) => {
    try {
        const allNotes = await pool.query("SELECT * FROM text_note")
        res.json(allNotes.rows)

    } catch (err) {
        console.error(err.message)

    }
})

//get a note
app.get("/notes/:id", async (req, res) => {
    try {
        const { id } = req.params
        console.log(req.params) //print out whatever :id is 
        const note = await pool.query("SELECT * FROM text_note WHERE text_note_id = $1", [id])
        res.json(note.rows)

    } catch (err) {
        console.error(err.message)
    }
})

//update a note
app.put("/notes/:id", async (req, res) => {
    try {   

        const{id} = req.params;
        const {description} = req.body;
        const updateNote = await pool.query("UPDATE text_note SET description = $1 WHERE text_note_id = $2", [description, id])
        res.json(updateNote)

    } catch (err) {
        console.log(err.message)
    }
})

//delete a note
app.delete("/notes/:id", async(req, res)=>{
    try {
        const{id} =req.params;
        const deleteTodo = await pool.query("DELETE FROM text_note WHERE text_note_id = $1", [id])

        res.json("note ${id} was deleted")

        
    } catch (error) {
        console.log(error.message)
        
    }

})
app.listen(port, () => {
    console.log(`Server listening to port ${chalk.green(port)}` );
});

