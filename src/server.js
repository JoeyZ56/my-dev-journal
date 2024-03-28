const express = require("express");
const app = express();

AggregationCursor.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3010, () => {
  console.log("Example app listening on port 3010!");
});
