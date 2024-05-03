import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Foter from "./pages/Foter";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Foter />
    </>
  );
}

export default App;
