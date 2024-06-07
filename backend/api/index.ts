const express = require("express");
const app = express();
const myapp = require("./app");

app.use("/", myapp);

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;