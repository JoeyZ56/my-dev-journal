const express = require("express");
const recipeRoute = require("./recipeRoute");

const app = express();
const PORT = 3000;

app.use("/api", recipeRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
