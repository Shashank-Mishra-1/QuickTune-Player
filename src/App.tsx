import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./app.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}