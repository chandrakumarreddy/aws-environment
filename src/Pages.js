import { Routes, Route } from "react-router-dom";
import Add from "./routes/Add";
import Home from "./routes/Home";
import View from "./routes/View";

export default function Pages() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/add" element={<Add />} />
      <Route exact path="/environment/:id" element={<View />} />
    </Routes>
  );
}
