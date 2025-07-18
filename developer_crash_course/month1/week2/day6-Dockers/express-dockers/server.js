const express = require("express");
const app = express();

app.use(express.json());

app.use("/", (req, res) => {
  res.send("Hello from express-dockers!");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
