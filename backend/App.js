const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const cors = require("cors");
const http = require("http");
const { router } = require("./routes/main");

const MongoURI = "mongodb+srv://sarawasfy:QKaz5ZeSinAeKwmH@cluster0.ogy6hiu.mongodb.net/";

const app = express();

app.use(express.json());

const port = process.env.PORT || "8000"; //Backend


mongoose
  .connect(MongoURI)
  .then(() => {
    console.log("MongoDB is now connected!");
    // Starting server
    const server = app.listen(port, () => {
      console.log(`Listening to requests on http://localhost:${port}`);
    });
});

app.use(
    cors({
      origin: "http://localhost:3000", //Frontend
      credentials: true,
    })
  );
  
  app.use(express.json());
  app.use(cookieParser());
  app.use("/", router);
