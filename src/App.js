import React from "react";
import "./styles.css";
import Header from "./components/Header";
import MemeGenerator from "./components/MemeGenerator";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <div className="App">
      <Header />
      <MemeGenerator />
    </div>
  );
}
