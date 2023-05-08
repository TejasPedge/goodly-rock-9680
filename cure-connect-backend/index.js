const express = require("express");
const env = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;
const { connect } = require("./db");
const { UserRoutes } = require("./src/Controllers/Users.routes");
const { ProductsRoutes } = require("./src/Controllers/Products.routes");
const cors = require("cors");

// middlewares
app.use(express.json());
app.use(cors());

app.use("/users", UserRoutes);
app.use("/products", ProductsRoutes);

// Connecting To the Server and the Database Note : [ Use Nodemon to run the server instead of node --> for better UI in the in the terminal ]

app.listen(PORT, async () => {
  try {
    await connect;
    console.log("");
    console.log("💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖");
    console.log("💖                                                  💖");
    console.log("💖         ✅  Connected To the Database  🗳️         💖");
    console.log("💖                                                  💖");
    console.log(`💖         🚀  Server is Running on Port ${PORT}       💖`);
    console.log("💖                                                  💖");
    console.log("💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖");
  } catch (error) {
    console.log("");
    console.log(
      "❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌"
    );
    console.log(
      "❌                                                            ❌"
    );
    console.log(
      `❌        ⚠️   Unable to connect to the database  ⚠️            ❌`
    );
    console.log(
      "❌                                                            ❌"
    );
    console.log(
      "❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌"
    );
    console.log("");
    console.log(error);
  }
});
