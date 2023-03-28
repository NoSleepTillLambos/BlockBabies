import express, { Express} from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose, { mongo } from 'mongoose';

// import models
import {InventoryModel} from './models/Inventory'; 

dotenv.config();
const app: Express = express();

// middleware
app.use((cors));
app.use(express.json()); //get params from body and avoid cors

const port = process.env.PORT || 3000;
const clusterUrl = process.env.CLUSTER;
// connection 
mongoose.set('strictQuery', false);
mongoose.connect(clusterUrl!).then(() => {
    console.log("connected successfully")
}).catch((error) => {
    console.log(error.message)
})

//CRUD CALLS
app.get('/inventory', async (req,res) => {
    const inventory = await InventoryModel.find({});
    res.send(inventory)
})
app.get('/', (req,res) => {
    res.send("server is working");
})

// listening
app.listen(port, () => {
    console.log("server: listening on port" + port)
})

