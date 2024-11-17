import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import postRoutes from './routes/post.js';

//mongodb+srv://aneelapala:<UXrHg2R8XsHH4TXL>@cluster0.xu8pf.mongodb.net/webproj?retryWrites=true&w=majority&appName=Cluster0

mongoose.connect(process.env.MONGODB_KEY)
    .then(() => {
        console.log('connected to db');
    }).catch(() => {
    console.log("connection failed:");
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :false}));

//adding header data
app.use((req, res, next )=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-AlLow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    next();
});

app.use('/api/posts', postRoutes);
export default app;