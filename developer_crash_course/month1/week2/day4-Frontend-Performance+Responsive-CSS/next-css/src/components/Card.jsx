import CardItem from "./CardItem";

const Card = () => {
  const cardData = [
    { title: "Spaghetti", description: "Classic Italian pasta dish" },
    { title: "Pizza", description: "Cheesy goodness with toppings" },
    { title: "Tacos", description: "Spicy and satisfying" },
    { title: "Curry", description: "Spicy and Filling" },
    { title: "Dumplings", description: "spongy and savory" },
    { title: "Cheese Burger", description: "Juicy and crisp" },
  ];
  return (
    <div className="py-4 px-4">
      <header className="text-3xl font-bold mb-6 flex justify-center">
        Responsive Grid
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-5xl">
        {cardData.map((card, index) => (
          <CardItem
            key={index}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
