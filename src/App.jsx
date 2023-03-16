import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profil } from "./pages/Profil";
import { Error } from "./pages/Error";
import { Mint } from "./pages/Mint";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { Security } from "./pages/Security";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/security" element={<Security />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;