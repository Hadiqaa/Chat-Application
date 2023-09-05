const express = require('express')
const sequelize = require('sequelize')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const {Client} = require('pg')
//setting up your port
const PORT = process.env.PORT || 3000

const Connection = new Client({
host : 'localhost',
user:'hadiqasumbalarshad',
password :'11223344',
port:'5432'
});

Connection.connect()
.then(() => { 
    console.log("Connected to database");
    Connection.end();

})
.catch((err) => {
    console.log("OOps cant connect", err);
}); 

const app = express()

app.get("/", (req,res) => {
    res.send("Hello just checking");
});
//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))



