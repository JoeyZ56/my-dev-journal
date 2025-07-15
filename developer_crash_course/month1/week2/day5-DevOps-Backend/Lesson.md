💻 Day 5 – DevOps & Backend (Tuesday, July 15)

Today is about:

    •	Building a RESTful API in Node + Express
    •	Learning request/response flow
    •	Setting up route structure
    •	Practicing lightweight DevOps: environmental setup, local testing, and basic project hygiene

---

### Part 1

🔹 Concept Check

Answer these in your own words so we can ground your backend fluency:

    1.	What is a REST API, and how is it different from a website?

    2.	What are the HTTP methods (GET, POST, PUT, DELETE) used for?

    3.	What does req and res mean in an Express route handler?

    4.	How would you explain what middleware is?

---

### Part 2

🛠️ What You’ll Build

A mini API for recipes:

    •	GET /recipes → return all recipes
    •	GET /recipes/:id → return one recipe
    •	POST /recipes → add a new recipe
    •	PUT /recipes/:id -> update existing recipe
    •   DELETE /recipes/:id -> delete an existing recipe

```jsx
/api
└── routes
    └── recipeRoutes.js
└── data
    └── mockRecipes.js
└── server.js
```

mockRecipes.js

```jsx
const recipes = [
  { id: 1, title: "Spaghetti", ingredients: ["pasta", "tomato sauce"] },
  { id: 2, title: "Tacos", ingredients: ["tortilla", "beef", "cheese"] },
];

module.exports = recipes;
```

recipeRoutes.js

```jsx
const express = require("express");
const router = express.Router();
const recipes = require("../data/mockRecipes");

// GET all recipes
router.get("/", (req, res) => {
  res.json(recipes);
});

// GET recipe by ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) return res.status(404).json({ message: "Recipe not found" });

  res.json(recipe);
});

module.exports = router;
```

server.js

```jsx
const express = require("express");
const app = express();
const recipeRoutes = require("./routes/recipeRoutes");

app.use(express.json());
app.use("/recipes", recipeRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```
