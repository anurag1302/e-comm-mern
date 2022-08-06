import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Registration from "./components/Registration";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<h1>Home Component</h1>} />
          <Route path="/products" element={<h1>Products List Component</h1>} />
          <Route path="/add-product" element={<h1>Add Product Component</h1>} />
          <Route
            path="/update-product"
            element={<h1>Update Product Component</h1>}
          />
          <Route path="/logout" element={<h1>Logout Component</h1>} />
          <Route path="/profile" element={<h1>Profile Component</h1>} />
          <Route path="/register" element={<Registration />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
