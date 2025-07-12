"use client";
import React, { useState } from "react";
import Card from "@/components/Card";
import CardForm from "@/components/CardForm";
import type { CardProps } from "@/components/Card";

const Home = () => {
  const [card, setCard] = useState<CardProps>({
    title: "",
    description: "",
    imageUrl: "",
  });
  return (
    <div className="flex justify-center flex-col items-center gap-2">
      <CardForm card={card} setCard={setCard} />
      <Card {...card} />
    </div>
  );
};

export default Home;
