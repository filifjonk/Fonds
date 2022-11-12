import "./styles.css";
import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Assist } from "./Assist";
import { Case } from "./Case";
import { Projects } from "./Projects";
import { Slider } from "./Slider";
function Third() {
  return (
    <>
      <Header />
      <Case />
      <Slider />
      <Footer />
    </>
  );
}
export { Third };
