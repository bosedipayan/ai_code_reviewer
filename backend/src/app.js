const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express();

app.use(express.json());

// Enable CORS for specific origin
app.use(cors({
  origin: "http://localhost:5173", // Allow frontend requests
  methods: "GET,POST,PUT,DELETE,OPTIONS", // Allowed HTTP methods
  allowedHeaders: "Content-Type, Authorization" // Allowed headers
}));

// If you want to allow all origins (for development)
app.use(cors());

app.get('/', (req, res)=>{
    res.send('Welcome');
})

app.use('/ai', aiRoutes);


module.exports = app;