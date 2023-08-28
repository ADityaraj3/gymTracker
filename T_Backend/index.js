import express from 'express'
import mongoose from 'mongoose'
import Obj from './models/object.js'
import { objs } from './data/index.js'
import helment from 'helmet';
import cors from 'cors';
const port = 5173
const mongoURL = 'mongodb+srv://khemesarashreyansh:wSvCBS6ZjupLRLqz@gymtracker.6b7y63a.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'gymTracker';

const app = express();
app.use(express.json());
app.use(helment());
app.use(helment.crossOriginResourcePolicy({ policy: "cross-origin" }));
const allowedOrigins = ['http://localhost:3002'];
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));


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
        const data = await Obj.find();
        res.status(200).json(data);
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