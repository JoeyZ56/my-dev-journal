const express = require("express");
const router = express.Router();

//Mock data
const getRecipes = [
  { id: 1, title: "Spaghetti" },
  { id: 2, title: "Pizza" },
];

router.get("/recipes", (req, res) => {
  const recipes = getRecipes();
  res.json(recipes);
});

module.exports = router;
