import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Navbar from "../components/Navbar";
import { useMyContext } from "../MyContextProvider";

type homePageProps = {
  darkMode: boolean;
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
    </>
  );
}
