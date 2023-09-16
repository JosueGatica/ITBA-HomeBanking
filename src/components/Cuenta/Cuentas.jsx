import Header from "../Header";
import '../styles/cuentas.css';
import SeccionDerecha from "./SeccionDerecha";
import SeccionIzquierda from "./SeccionIzquierda";
import Footer from "../Footer";

function Cuentas() {
  return (
    <>
  
      <Header />
      <main class="flex items-center">
        <div class="contenedor flex justify-center items-center gap-5 pt-5">
          <SeccionIzquierda/>
          <SeccionDerecha/>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default Cuentas;
