import React from "react";
import Them from "./components/Them";
import DanhsachViec from "./components/DanhsachViec";
import "./App.css";
function App() {
  return (
    <div className="app">
      <h1 className="app-title">Việc cần làm: </h1>
      <Them />
      <DanhsachViec />
    </div>
  );
}

export default App;
