import "./styles.css";
import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Assist } from "./Assist";
import { Projects } from "./Projects";
function Second() {
  return (
    <>
      <Header />
      <Assist />
      <Projects />
      <Footer />
    </>
  );
}
export { Second };
