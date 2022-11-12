import "./styles.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./Main";
import { Second } from "./Second";
import { Third } from "./Third";
import { Fifth } from "./Fifth";
import { Sixth } from "./Sixth";
export default function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} exact />
            <Route path="/cart" element={<Second />} exact />
            <Route path="/sup" element={<Third />} />
            <Route path="/fif" element={<Fifth />} />
            <Route path="/all" element={<Sixth />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}
