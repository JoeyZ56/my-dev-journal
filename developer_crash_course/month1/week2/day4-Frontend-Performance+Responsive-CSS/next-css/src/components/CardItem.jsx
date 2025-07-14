import React from "react";

const CardItem = ({ title, description }) => {
  return (
    // <div className="flex flex-col items-center min-h-screen p-4">
    <div className="bg-red-900 shadow p-4 rounded flex justify-center flex-col">
      <h3 className="text-shadow-white font-bold flex justify-center text-amber-400">
        {title}
      </h3>
      <p className="text-shadow-white flex justify-center text-amber-400">
        {description}
      </p>
      <button className="bg-amber-500 text-shadow-white px-3 py-1 rounded hover:bg-amber-400 mt-2">
        {" "}
        Check Out More
      </button>
    </div>
    // </div>
  );
};

export default CardItem;
