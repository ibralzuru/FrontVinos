//import Product from "./components/Product";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import './App.css';
import Formulario from "./components/Formulario";
import FormularioRegistro from "./components/user/FormularioRegistro";
import { Routes, Route, /* Link, Switch */} from "react-router-dom";



function App() {
  return (
    <div className="App">
      
      <Navbar />
     {/*  <Products />
      <Product /> */}
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/registro" element={<FormularioRegistro />} />
        <Route path="/formulario" element={<Formulario />} />
      
      </Routes >

    </div >
  );
}


export default App;