import { Route, Routes } from "react-router-dom";
import "./App.css";
import Favoriler from "./components/Favoriler";
import Footer from "./components/Footer";
import KitapDetay from "./components/KitapDetay";
import KitapListesi from "./components/KitapListesi";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<KitapListesi />} />
        {/* params bölümü (parametreler) :id de olduğu gibi ':' ile başlar */}
        <Route path="/kitap/:id" element={<KitapDetay />} />
        <Route path="/favoriler" element={<Favoriler />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
