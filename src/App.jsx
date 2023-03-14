import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profil } from "./pages/Profil";
import { Header } from "./components/Header/Header";
import { Error } from "./pages/Error";
import { Mint } from "./pages/Mint";
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
      </Routes>
    </>
  );
}
export default App;