/*
 Step 1: Define Your Props Type

In your Card.tsx file, at the top, define a type for your props:
	•	It should include title and description as required strings
	•	imageUrl should be optional

Step 2: Build the Functional Component

Write the actual Card component using those props.
	•	Create a React functional component named Card
	•	It should accept props of type CardProps
	•	Destructure the props in the parameter list: title, description, imageUrl
	•	Inside the function, define a fallback image URL as a constant
	•	Use JSX to return a <div> with:
	•	An <img> showing either imageUrl or the fallback
	•	A heading element for the title
	•	A paragraph for the description

*/

type CardProps = {
  title: string;
  description: string;
  imageUrl?: string; //? means optional
};

const Card = (list: CardProps) => {
  return (
    <div>
      <header>Title: {list.title}</header>
      <p>Description: {list.description}</p>
      <img
        src={list.imageUrl ? list.imageUrl : "/arcanegrimpire.webp"} //fall back on default image
        width={500}
        height={500}
        alt="card-image"
      />
    </div>
  );
};

export default Card;
