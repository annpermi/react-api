//start
const express = require('express')// access to our express variable
const app = express() //instance of obj

app.use(express.json()) //parse json automatically

let userList = [
    {
        id: 1,
        name: 'Anna',
        age: 25,
        married: true
    },
    {
        id: 2,
        name: 'Den',
        age: 32,
        married: true
    },
    {
        id: 3,
        name: 'Bru',
        age: 40,
        married: false
    }
]
//get information
app.get('/users', (req, res)=>{ //request response
    // res.send('Hello World');
    res.status(200).json(userList); //send back
})

//create or add information to your data base
app.post('/users', (req, res)=> {
    //Grab the data sent by client
    //Add data to userList
    //Return new list
    // const name = req.body.name
    // const age = req.body.age
    const newUser = req.body;
    userList.push(newUser);
    res.json(userList);
})

//Update staff in your database
app.put('/users', (req, res)=> {
    //Grab the new name
    //Loop through list and update the names
    //Return the new list

    const newName = req.body.newName;
    for(let i = 0; i < userList.length; i++){
        userList[i].name = newName;
    }
    res.json(userList);
})

//Delete
app.delete("/users/:id", (req, res)=> {
    //Get the id
    //Delete user with id
    //Return the list
    const id = req.params.id;
    let foundId = false;
    for(let i = 0; i < userList.length; i++){
        if(userList[i].id == id){
            userList.splice(i, 1);
            foundId = true;
        }
    }

    if(!foundId) {
        res.status(404).json({error: "User Id not found"})
    }

    res.json(userList)
})

app.listen('3001', ()=>{
    console.log('Server running on port 3001')
})//open port