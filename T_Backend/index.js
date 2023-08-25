import express from 'express'
import mongoose from 'mongoose'
import Obj from './models/object.js'
import { objs } from './data/index.js'

const port = 3000
const mongoURL = 'mongodb+srv://khemesarashreyansh:wSvCBS6ZjupLRLqz@gymtracker.6b7y63a.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'gymTracker';

const app = express()

mongoose.connect(mongoURL, {
    dbName: dbName,
    useNewUrlParser: true,
    useUnifiedTopology: true,
},
// Obj.insertMany(objs),
).then(()=>console.log("connected to db"))
.catch((err)=>console.log("error: " + err))

app.get('/getUserData', async (req, res)=>{
    try {
        const data = await Obj.find()
        res.status(200).json(data)
    } catch (err ) {
        console.log(err)
        res.status(404).json({"msg" : err })
    }
})

app.get('/', (req, res)=> {
res.send("hello world")
})

app.listen(port, ()=> {
console.log(`app started at port ${port}`)
})