import React from "react";
import { Hero } from "../components/Hero";
import { Biography } from "../components/Biography";

export const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Welcome to Care Medical Institute"}
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
    </>
  );
};
