import RecipeCard from "@/components/ui/RecipeCard";

const RecipeCardShowCase = () => {
  const sampleRecipe = {
    name: "Simple Pasta",
    ingredients: [
      "Pasta",
      "Tomato paste",
      "Garlic",
      "Heavy cream",
      "Parmesan Cheese",
      "Fresh Basil",
    ],
    isVegetarian: true,
  };
  return (
    <div>
      <RecipeCard recipe={sampleRecipe} />
    </div>
  );
};

export default RecipeCardShowCase;
