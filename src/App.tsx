import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/home/Home";
import Register from "@pages/register/Register";
import Participation from "@pages/participation/Participation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/participation" element={<Participation />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
