import { Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";
import Home from "./pages/Home";
import Error from "./pages/Error";
import "./App.scss";

function App() {
  Cookies.set("name", "value", { expires: 7 });
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default App;