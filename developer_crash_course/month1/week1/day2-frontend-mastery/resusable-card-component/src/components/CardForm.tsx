"use client";
import { CardProps } from "@/components/Card";

type CardFormProps = {
  card: CardProps;
  setCard: React.Dispatch<React.SetStateAction<CardProps>>;
};

const CardForm = ({ card, setCard }: CardFormProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCard((prevCard) => ({
      ...prevCard,
      [name]: value,
    }));
  };

  return (
    <form className="flex flex-col">
      <h3 className="font-bold text-center mb-2 mt-5">User Form</h3>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={card.title}
        onChange={handleInputChange}
        className="border-1 mb-1 w-96"
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={card.description}
        onChange={handleInputChange}
        className="border-1 mb-1 w-96"
      />
      <input
        type="text"
        name="imageUrl"
        placeholder="Image Url (Optional)"
        value={card.imageUrl}
        onChange={handleInputChange}
        className="border-1 mb-1 w-96"
      />
    </form>
  );
};

export default CardForm;
