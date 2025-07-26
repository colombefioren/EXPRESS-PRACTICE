import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Character from "./pages/Character";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/character/:id" element={<Character />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
