import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Animal from "./pages/Animal";

export default function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Animal" element={<Animal />} />
      </Routes>
    </div>
  );
}
