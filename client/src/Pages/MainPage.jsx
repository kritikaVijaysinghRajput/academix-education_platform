import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "./Hero";
import InfoPage from "./InfoPage";
import Footer from "./Footer";

export default function Main() {
  return (
    <div>
      <Navbar />
      <Hero />
      <InfoPage />
      <Footer />
    </div>
  );
}
