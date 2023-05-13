import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
