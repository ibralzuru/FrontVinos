import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import LoginForm from "./components/LoginForm";
import FormularioRegistro from "./components/user/FormularioRegistro";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/registro" element={<FormularioRegistro />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes >
    </div >
  );
}