const express = require("express");
const app = express();

const recipeRoutes = require("./routes/recipeRoute");

app.use(express.json());

app.use("/api/recipes", recipeRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
