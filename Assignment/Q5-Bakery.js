
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Sweet Bakery - Home</title>
        </head>
        <body>
            <h1>Welcome to Sweet Bakery!</h1>
            <p>Fresh and delicious bakery products every day.</p>
            <a href="/menu">View Menu</a><br>
            <a href="/contact">Contact Us</a>
        </body>
        </html>
    `);
});

app.get('/menu', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Bakery Menu</title>
        </head>
        <body>
            <h1>Our Bakery Menu</h1>
            <ul>
                <li>Chocolate Cake - Rs. 500</li>
                <li>Black Forest Cake - Rs. 600</li>
                <li>Chocolate Pastry - Rs. 80</li>
                <li>Vanilla Cupcake - Rs. 50</li>
                <li>Fresh Bread - Rs. 40</li>
            </ul>
            <a href="/">Home</a><br>
            <a href="/contact">Contact Us</a>
        </body>
        </html>
    `);
});

app.get('/contact', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Contact Us</title>
        </head>
        <body>
            <h1>Contact Sweet Bakery</h1>
            <p>Phone: 9876543210</p>
            <p>Address: Main Market, Saharanpur, India</p>
            <a href="/">Home</a><br>
            <a href="/menu">View Menu</a>
        </body>
        </html>
    `);
});

app.listen(3002, () => {
    console.log("Bakery Website running at http://localhost:3002");
});
