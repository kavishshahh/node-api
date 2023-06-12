const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

mongoose.connect('mongodb+srv://kavish123:kavish123@cluster0.ugtdzns.mongodb.net/test');

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})