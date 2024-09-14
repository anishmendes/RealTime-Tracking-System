const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("hey this is just a check");
});

app.listen(3000);