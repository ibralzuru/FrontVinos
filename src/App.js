import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import LoginForm from "./components/LoginForm";
import Carrito from "./components/carrito/Carrito";
import FormularioRegistro from "./components/user/FormularioRegistro";
import './App.css';
import ProductDetail from "./containers/ProductDetail/ProductDetail";
import { Container } from "@mui/system";


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
          <Route path="/detalle" element={<ProductDetail />} />
        </Routes >
      </Container>
    </div >
  );
}