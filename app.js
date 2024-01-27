const cors = require("cors");
const express = require("express");
const app = express();

const roomsController = require("./controllers/roomsController")
const bookingsController = require("./controllers/bookingsController")

app.use(cors());
app.use(express.json());

app.use("/rooms", roomsController)
app.use("/bookings", bookingsController)

app.get("/", (req, response) => {
    response.send("Welcome");
});

//need to import variable for variable controller 
//and then use to built endpoint on website

app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
});

module.exports = app;