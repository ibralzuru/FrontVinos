import { Route, Routes, } from "react-router-dom";
import { Container } from "@mui/system";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import LoginForm from "./components/LoginForm";
import Carrito from "./components/carrito/Carrito";
import FormularioRegistro from "./components/user/FormularioRegistro";
import MenuBurguer from "./components/menuBurguer/MenuBurguer";
import ProductDetail from "./containers/ProductDetail/ProductDetail";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/registro" element={<FormularioRegistro />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/detalle/:id" element={<ProductDetail />} />
        </Routes >
      </Container>
      <MenuBurguer />
    </div >
  );
}