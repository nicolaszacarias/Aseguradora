import "./App.css";
import Layout from "./components/Layout/Layout";
import Secures from "./components/Secures/Secures";
import Website from "./pages/Website";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
    <Route path="/" element={<Website/>}/>
    <Route path="/Seguros" element={<Secures/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
