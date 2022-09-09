import Product from "./components/Product";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import './App.css';
import Formulario from "./components/Formulario";
import FormularioRegistro from "./components/FormularioRegistro";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Products />
      <Product />
      <Formulario />
      <FormularioRegistro />
     
    </div>
  );
}


export default App;