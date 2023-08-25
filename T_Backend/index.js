const express = require('express')
const express = require('express')
const mongoose = require("mongoose")
import Obj from '../models/object.js';
import { objs } from './data/index.js';

const port = 3000
const mongoURL = 'mongodb+srv://khemesarashreyansh:wSvCBS6ZjupLRLqz@gymtracker.6b7y63a.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'gymTracker';

mongoose.connect(mongoURL, {
    dbName: dbName,
    useNewUrlParser: true,
    useUnifiedTopology: true,
},
Obj.insertMany(objs),
).then(()=>console.log("connected to db"))


app.get('/', (req, res)=> {
res.send("hello world")
})

app.listen(port, ()=> {
console.log(`app started at port ${port}`)
})