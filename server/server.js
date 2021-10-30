const express = require("express");
const app = express();
const base = require("./Router/index");

app.use("/", base);

const port = 3001;
app.listen(port, () => {
  console.log(`Listening port ${port}..`);
});
