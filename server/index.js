const express = require("express");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const productsData = require("./data/products");
const Product = require("./models/Product");

const port = process.env.PORT || 5000;

//Connect to MongoDB
connectDB();
const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productsData);
    console.log("Data import success");
  } catch (error) {
    console.error("Error with data import ", error);
    process.exit(1);
  }
};
importData();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const io = require("socket.io")(8081, {
  cors: {
    origin: "http://localhost:3000",
  },
});
io.on("connection", (socket) => {
  socket.on("message", ({ name, message }) => {
    io.emit("message", { name, message });
  });
});

app.use("/api/clients", require("./routes/clientRoutes"));
app.use("/api/products", require("./routes/productsRoutes"));
app.use("/api/locations", require("./routes/locationsRoutes"));
app.use("/api/carts", require("./routes/cartsRoutes"));

app.listen(port, console.log(`Server running on port ${port}`));

app.get("/importProducts", async (req, res) => {
  res.send(await importData());
});
