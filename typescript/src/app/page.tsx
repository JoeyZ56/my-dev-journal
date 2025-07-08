"use client";
import RecipeCardShowCase from "@/sandbox/RecipeCardShowCase";
import AvailablePetsShowCase from "@/sandbox/AvailablePetsShowCase";

const Home = () => {
  return (
    <div>
      <div className="">
        {" "}
        <RecipeCardShowCase />
      </div>
      <div>
        <AvailablePetsShowCase />
      </div>
    </div>
  );
};

export default Home;
