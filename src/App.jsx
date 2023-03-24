import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profil } from "./pages/Profil";
import { Error } from "./pages/Error";
import { Mint } from "./pages/Mint";
import { Details } from "./pages/Details";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { Security } from "./pages/Security";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import "./pages/Title.css";
import "./App.css";

export const App = () => {
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
        <Route path="/details/:TokenId" element={<Details />} />
      </Routes>
      <Footer />
    </>
  );
}