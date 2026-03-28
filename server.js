const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { predictDisease } = require("./aiModel");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/check", (req, res) => {
    const { symptoms } = req.body;

    if (!symptoms) {
        return res.status(400).json({ error: "No symptoms provided" });
    }

    const result = predictDisease(symptoms);
    res.json(result);
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});