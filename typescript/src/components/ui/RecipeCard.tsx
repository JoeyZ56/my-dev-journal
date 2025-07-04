type Recipe = {
  name: string;
  ingredients: string[];
  isVegetarian?: boolean; // ? makes the property optional
};

type RecipeCardProps = {
  recipe: Recipe;
};

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <div className="text-center bg-amber-500">
      <h1 className="mb-2">Recipe Sample</h1>
      <h2 className="font-bold">{recipe.name}</h2>
      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>
            {index + 1}: {item}
          </li>
        ))}
      </ul>
      <h2>🌱</h2>
    </div>
  );
};

export default RecipeCard;
