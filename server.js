
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//connect mongoose to conect or wrap with the mongodb database, insert the database connection as a string localhost+databasename
mongoose.connect('mongodb://localhost/subscribers', 
{ useNewUrlParser: true}
)


const db = mongoose.connection

//run the app on localhost3000
app.listen(3000, () => console.log("server started"));