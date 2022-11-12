import "./styles.css";
import React from "react";
import { Header } from "./Header";
import { Slider } from "./Slider";
import { Friend } from "./Friend";
import { Fonds } from "./Fonds";
import { About } from "./About";
import { Footer } from "./Footer";
import { Headfirst } from "./Headfirst";

function Main() {
  return (
    <>
      <Header />
      <Headfirst />
      <Slider />
      <Friend />
      <Fonds />
      <About />
      <Footer />
    </>
  );
}
export { Main };
