const dotenv = require('dotenv')
const express = require('express')
dotenv.config({ path: './config/config.env' })
const connectDB = require('./config/db')
const errorHandler = require("./middleware/error");



connectDB();

//route 
const Auth = require('./routes/auth')

const app = express();


app.use(express.json())
app.use('/api/auth', Auth)
app.use('/api/private', require('./routes/private'))


app.use(errorHandler);

const PORT = process.env.PORT || 5000;


const server = app.listen(PORT, () => console.log(`MongoDB is running on port ${PORT}`))

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err}`)
    
    server.close(() => process.exit(1));
})