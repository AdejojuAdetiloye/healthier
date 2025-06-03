const express = require('express');
const connectToDB = require('./database/connect');
const AllRoutes = require('./routes/routes');
const app = express()

const port = 3000;

//middlewares
app.use(express.json());

//all routes
app.use('/healthier',AllRoutes);

//connect to mongoDB
connectToDB();

//start the server
app.listen(port,() => {
    console.log(`Server running on port ${port}`);
})