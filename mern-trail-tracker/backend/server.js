const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');


require ('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

// Connect to the Mongo DB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useUnifiedTopology: true,
    useNewUrlParser: true,});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})    

const trailsRouter = require('./routes/trails');
const usersRouter = require('./routes/users');

app.use('/trails', trailsRouter);
app.use('/users', usersRouter);


// Start the API server
app.listen(PORT, function() {
  console.log(`Server is running on PORT ${PORT}!`);
});