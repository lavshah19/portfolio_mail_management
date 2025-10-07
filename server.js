require('dotenv').config();
const express = require('express');
const app = express();
const connectToDatabase = require('./database/db');
const cors = require('cors');
const mailRoute = require('./routes/mailroute');
app.use(express.json());
app.use(cors());
const port = 3000 || process.env.PORT;
connectToDatabase();
app.use('/api', mailRoute);
 
app.listen(port, () => console.log(` app listening on port ${port}!`));