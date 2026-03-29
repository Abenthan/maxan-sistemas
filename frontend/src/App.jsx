import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573128919875"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20c05c] rounded-full shadow-lg transition-colors"
    >
      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.374 0 0 5.373 0 12c0 2.124.554 4.122 1.526 5.859L0 24l6.336-1.49A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.88 9.88 0 01-5.017-1.363l-.36-.214-3.732.878.939-3.627-.235-.374A9.861 9.861 0 012.106 12C2.106 6.53 6.53 2.106 12 2.106c5.47 0 9.894 4.424 9.894 9.894 0 5.47-4.424 9.894-9.894 9.894z"/>
      </svg>
    </a>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/*" element={<Inicio />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;
