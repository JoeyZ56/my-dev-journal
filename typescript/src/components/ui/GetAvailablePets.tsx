type Pets = {
  name: string;
  type: string;
  age: number;
  adopted: boolean;
};

type PetsProp = {
  pets: Pets[]; //type is an array of the Pets object
};

const GetAvailablePets = ({ pets }: PetsProp) => {
  return (
    <div className="bg-gray-300 h-30">
      <h1 className="flex justify-center font-bold">Pets Up for Adoption 🐕</h1>
      <div>
        {pets.map((pet, index) => (
          <>
            <ul key={index} className="flex justify-evenly mb-2 font-2xl">
              <li>
                {index + 1}. Name: {pet.name}
              </li>
              <li>Animal Type: {pet.type}</li>
              {/* ?? returns the right-hand side value only 
              if the left-hand side is null or undefined */}
              <li>Age: {pet.age ?? 0}</li>
              <li>
                Adoption Status: {pet.adopted ? "Unavailable" : "Available"}
              </li>
            </ul>
          </>
        ))}
      </div>
    </div>
  );
};

export default GetAvailablePets;
