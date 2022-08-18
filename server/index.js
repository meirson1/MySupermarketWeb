const express = require("express");
const colors = require("colors");
const cors = require("cors");
const Route = require("./routes/routes");
const productsRoutes = require("./routes/productsRoutes");
require("dotenv").config();
const connectDB = require("./config/db");
const productsData = require("./data/products");
const Product = require("./models/Product"); 
const port = process.env.PORT || 5000;

const app = express();

//Connect to MongoDB
connectDB();
const importData = async () =>{
    try {
        await Product.deleteMany({});
        await Product.insertMany(productsData);
        console.log("Data import success");
        // process.exit();
    } catch (error) {
        console.error("Error with data import ", error);
        process.exit(1);
    }
}
importData();

app.use(cors());
app.use(express.json());
app.use("/",Route);
app.use("/api/products", productsRoutes);

app.listen(port, console.log(`Server running on port ${port}`));

app.get('/importProducts', async (req, res) => {
    res.send(await importData())
})
