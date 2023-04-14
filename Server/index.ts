import express, { Express} from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from "cors";
import bcrypt from "bcrypt";

// import models
import {MaterialCategory} from './models/materials'; 
import { UserModel } from "./models/userAuth";

dotenv.config();
const app: Express = express();

// middleware
app.use(cors({origin: 'http://localhost:4200'})); 
app.use(express.urlencoded({extended:false}));
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

app.get('/', (req,res) => {
    res.send("server is working");
    res.json().status(200).end()
})
app.get('/inventory', async (req,res) => {
    const inventory = await MaterialCategory.find({});
    res.send(inventory)
})

app.post('/inventory', async (req,res) =>  {
    const {name, category, height, type, image} = req.body
    const inventory = await MaterialCategory.create({name, category, height, type, image});
    res.send(inventory) 
    
})

app.put("/inventory/:id", async (req,res) => {
    const id = req.params.id;
    const {amount} = req.body;

    const inventory = await MaterialCategory.findByIdAndUpdate(id, {amount}, {new: true})
    res.send(inventory)
})

app.delete("/inventory/:id" , async (req,res) => {
    const id = req.params.id;
    const inventory = await MaterialCategory.findByIdAndDelete(id)
    res.send(inventory)
})
// listening
app.listen(port, () => {
    console.log("server: listening on port" + port)
})



// AUTH
app.post("/user/register", async(req,res) => {
    try {
        let { username, password, role } = req.body

        // hash password 
        password = await bcrypt.hash(password, 10)

        // create new user
        const user = await UserModel.create({username, password, role})


        res.json(user);


    } catch (error) {
        res.status(400).json({error})
    }
})


app.post("/user/login", async (req,res) => {
    try {
        // getting variables
        const {username, password } = req.body

        // check user exists
        const user = await UserModel.findOne({username: username})

        if(user) {
            const result = await bcrypt.compare(password, user.password!)

            if (result) {
                res.json({success: true})
            } else {
                res.status(400).json({error: "Invalid password"})
            }
        } else {
            res.status(400).json({error: "User does not exist"})
        }
    } catch (error){
        res.status(400).json({error})
    }
})