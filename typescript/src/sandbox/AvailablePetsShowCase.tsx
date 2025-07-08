import GetAvailablePets from "@/components/ui/GetAvailablePets";

const AvailablePetsShowCase = () => {
  const animals = [
    {
      name: "Jack",
      type: "Rabbit 🐰",
      age: 2,
      adopted: false,
    },
    {
      name: "Hammer",
      type: "Dog 🐶",
      age: null,
      adopted: true,
    },
    {
      name: "Sally",
      type: "Cat 🐱",
      age: 9,
      adopted: false,
    },
  ];

  return (
    <div>
      <GetAvailablePets pets={animals} />
    </div>
  );
};

export default AvailablePetsShowCase;
