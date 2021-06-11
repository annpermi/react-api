//start
const express = require('express')// access to our express variable
const app = express() //instance of obj
const mysql = require('mysql') // import package
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "UserDB"
})

app.use(express.json()) //parse json automatically

//get information
app.get('/users', (req, res)=>{ //request response
    db.query('SELECT * FROM users;', (err, result) => { //make a query
        if(err) {
            res.status(400).json(err)
        }else{
            res.status(200).json(result);
        }
    })
})

//create or add information to your data base
app.post('/users', (req, res)=> {
    const { name, age } = req.body;
    db.query("INSERT INTO users (name, age) VALUES (?,?);", [name, age], (err, result) => { //make a query
        if(err) {
            res.status(400).json(err)
        }else{
            res.status(200).json(result);
        }
    })
})

//Update staff in your database
app.put('/users', (req, res)=> {
   
})

//Delete
app.delete("/users/:id", (req, res)=> {
    
})

app.listen('3001', ()=>{
    console.log('Server running on port 3001')
})//open port