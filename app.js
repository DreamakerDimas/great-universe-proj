const express = require('express');
const config = require('config');
const connectDB = require('./config/db');

const PORT = config.get('port') || 5000;
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

app.use('/api/auth', require('./routes/api/auth'));
app.use('/apu/users', require('./routes/api/users'));

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
