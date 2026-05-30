const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db.js");

const reportRoute = require("./routes/reportRoute.js");

const app = express();

connectDB();

app.use(cors({
    origin: "*"
}));

app.use(express.json());

app.use("/api", reportRoute);

app.get("/", (req, res) => {
    res.send("Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});

