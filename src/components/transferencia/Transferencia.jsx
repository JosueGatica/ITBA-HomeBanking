import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import "../styles/Transferencia.css";

function Transferencia() {
  const [valorT, setValorT] = useState(0);

  const [saldo, setSaldo] = useState(400);

  const realizarTransferencia = () => {
    if (valorT > saldo) {
      alert("El valor debe ser menor al saldo disponible");
    } else {
      alert("Transferencia realizada");
      console.log(valorT);
      console.log(saldo);
      setSaldo(saldo - valorT);
      console.log(saldo);
    }
  };

  return (
    <>
      <Header />
      <main class="flex items-center">
        <div class="contenedor flex justify-center items-center gap-5 pt-5">
          <div class="seccion-izquierda">
            <div class="contenedor-saldo flex justify-center items-center">
              <div class="saldo">
                <h5 class="text-white">Saldo Disponible</h5>
                <h2 class="text-white" id="saldo-valor">
                  $ {saldo}
                </h2>
              </div>
            </div>
            <div class="ultimas-transac">
              <div class="contendor-transac pt-3">
                <h5 class="trasnferencia text-white fw-bold">
                  Transferencia a un alias, CBU o CVU
                </h5>
              </div>
                <div class="datos">
                  <h3 class="text-white fw-bold">
                    Ingrese el alias, CBU o CVU
                  </h3>
                  <input id="CBU" type="text" />
                </div>
                <div class="datos">
                  <h5 class="trasnferencia text-white fw-bold">
                    Ingrese el monto a transferir
                  </h5>
                  <input
                    id="dinero"
                    value={valorT}
                    onChange={() => setValorT()}
                  />
                </div>
                <div class="datos">
                  <button
                    id="enviar"
                    type="submit"
                    class="inline-block align-middle text-center
                                    select-none border font-normal whitespace-no-wrap rounded py-1 px-3
                                    leading-normal no-underline bg-green-500 text-white hover:green-600"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={(e) => realizarTransferencia(valorT)}>
                    Enviar
                  </button>
                </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Transferencia;
