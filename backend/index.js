import express from 'express';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 4001;

const test_data=[
    { id:1, nom:"John", age:30},
    { id:2, nom:"Emma", age:25},
    { id:3, nom:"Lucas", age:35},
    { id:4, nom:"Sophia", age:28},
    { id:5, nom:"Liam", age:32},
]
app.get('/', (req, res) => {
    res.json(test_data);
  });
app.listen(PORT,()=>{
    console.log(`Visit : http://127.0.0.1:${PORT}`)
});