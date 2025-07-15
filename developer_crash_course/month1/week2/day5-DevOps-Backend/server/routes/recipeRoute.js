const express = require("express");
const router = express.Router();
const recipes = require("../data/recipeData");

// GET all recipes
router.get("/", (req, res) => {
  res.json(recipes);
});

//GET recipe by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const recipe = recipes.find((r) => r.id == id);

  if (!recipe) return res.status(404).json({ message: "Recipe not found" });

  res.json(recipe);
});

//POST create recipe
router.post("/", (req, res) => {
  const { title, ingredients } = req.body;

  const newRecipe = {
    id: recipes.length + 1,
    title,
    ingredients,
  };

  recipes.push(newRecipe);

  res.status(201).json(newRecipe);
});

//PUT Update recipe
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  const updateRecipe = recipes.findIndex((r) => r.id == id);

  if (updateRecipe === -1)
    return res.status(404).json({ message: "can not find recipe by that id" });

  //Update the recipe at the index
  //recipes[index] gets the existing recipe at that index.
  //{ ...recipes[index] } spreads the original recipe into a new object.
  //{ ...updatedData } spreads the new updates on top.
  //The result is a merged object where any overlapping properties from updatedData overwrite the original ones.

  recipes[updateRecipe] = { ...recipes[updateRecipe], ...updatedData };
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  const deleteRecipe = recipes.findIndex((r) => r.id == id);

  if (!deleteRecipe === -1)
    return res.status(404).json({ message: "Recipe not found" });

  recipes.splice(deleteRecipe, 1);
  res.json("recipe deleted", recipes);
});

module.exports = router;
