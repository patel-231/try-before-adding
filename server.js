const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Helper to read data
const getData = () => {
    const data = fs.readFileSync(path.join(__dirname, 'data', 'products.json'), 'utf8');
    return JSON.parse(data);
};

// API Endpoints

// Get all products
app.get('/api/products', (req, res) => {
    const data = getData();
    res.json(data.products);
});

// Get a single product
app.get('/api/products/:id', (req, res) => {
    const data = getData();
    const product = data.products.find(p => p.id === parseInt(req.params.id));
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// Place an order
app.post('/api/orders', (req, res) => {
    const order = req.body;
    const data = getData();
    
    // Simple validation
    if (!order.items || order.items.length === 0) {
        return res.status(400).json({ message: 'No items in order' });
    }

    // Add order with ID and timestamp
    const newOrder = {
        id: Date.now(),
        ...order,
        timestamp: new Date().toISOString()
    };

    data.orders.push(newOrder);
    
    // Save back to file
    fs.writeFileSync(path.join(__dirname, 'data', 'products.json'), JSON.stringify(data, null, 2));

    res.status(201).json({ message: 'Order placed successfully', orderId: newOrder.id });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
