const express = require('express')
const mongoose = require("mongoose")
const app = express()

const port = 3000
const mongoURL = 'mongodb+srv://khemesarashreyansh:wSvCBS6ZjupLRLqz@gymtracker.6b7y63a.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'gymTracker';

mongoose.connect(mongoURL, {
        dbName: dbName,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(()=>console.log("connected to db"))

app.get('/', (req, res)=> {
    res.send("hello world")
})

app.listen(port, ()=> {
    console.log(`app started at port ${port}`)
})