import React from "react";
import { Hero } from "./components/Hero";

import { AppointmentFrom } from "../components/AppointmentForm";
export const AppointmentFrom = () => {
  return (
    <>
      <Hero title={"Schedule your appointment "} imageURL={"/signing.png"} />
      <AppointmentFrom />
    </>
  );
};
