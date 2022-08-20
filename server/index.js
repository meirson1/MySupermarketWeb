const express = require("express");
const colors = require("colors");
const cors = require("cors");
const Route = require("./routes/routes");
require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

const app = express();

//Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());
app.use("/", Route);

app.listen(port, console.log(`Server running on port ${port}`));
