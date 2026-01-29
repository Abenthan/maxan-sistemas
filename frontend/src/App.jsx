import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Tienda from "./pages/Tienda";
import Blog from "./pages/Blog";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;
