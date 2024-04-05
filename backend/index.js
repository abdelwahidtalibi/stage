import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4001;

const test_data=[
    { id:1, nom:"John", age:30},
    { id:2, nom:"Emma", age:25},
    { id:3, nom:"Lucas", age:35},
    { id:4, nom:"Sophia", age:28},
    { id:5, nom:"Liam", age:32},
];

// Route to get all data
app.get('/data', (req, res) => {
    res.json(test_data);
});

// Route to get data by ID
app.get('/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const data = test_data.find(item => item.id === id);
    if (data) {
        res.json(data);
    } else {
        res.status(404).send('Data not found');
    }
});

app.get('/data/first/:count', (req, res) => {
    const count = parseInt(req.params.count);
    const firstItems = test_data.slice(0, count);
    if (firstItems.length > 0) {
        res.json(firstItems);
    } else {
        res.status(404).send('No data found');
    }
});

app.get('/data/last/:count', (req, res) => {
    const count = parseInt(req.params.count);
    const lastItems = test_data.slice(-count);
    if (lastItems.length > 0) {
        res.json(lastItems);
    } else {
        res.status(404).send('No data found');
    }
});

app.get('/data/sorted-by-age/:order', (req, res) => {
    const order = req.params.order.toLowerCase();
    if (order === 'asc') {
        const sortedData = test_data.slice().sort((a, b) => a.age - b.age);
        res.json(sortedData);
    } else if (order === 'desc') {
        const sortedData = test_data.slice().sort((a, b) => b.age - a.age);
        res.json(sortedData);
    } else {
        res.status(400).send('Invalid order parameter. Use "asc" or "desc".');
    }
});


app.listen(PORT, () => {
    console.log(`Visit : http://127.0.0.1:${PORT}`);
});
