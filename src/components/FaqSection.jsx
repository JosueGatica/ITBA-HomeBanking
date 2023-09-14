import React from 'react';
import FAQItem from './FAQItem';
import '../components/styles/ayuda.css';

function FAQSection() {
  return (
    <div className="accordion" id="accordionExample">
      <FAQItem
        question="Cómo consultar mi saldo"
        answer={
          <div>
            <p>Para consultar tu saldo, sigue estos pasos:</p>
            <ol>
              <li>Inicia sesión en tu cuenta.</li>
              <li>Haz clic en la pestaña 'Cuentas'.</li>
              <li>En la sección 'Mis Cuentas', haz clic en el nombre de la cuenta que deseas consultar.</li>
              <li>El saldo de tu cuenta se mostrará en la parte superior de la página.</li>
            </ol>
          </div>
        }
      />
      <FAQItem
        question="Cómo realizar una transferencia"
        answer={
          <div>
            <p>Para realizar una transferencia, sigue estos pasos:</p>
            <ol>
                <li>Inicia sesión en tu cuenta.</li>
                <li>Haz clic en la pestaña "Transferencias".</li>
                <li>En la sección "Nueva Transferencia", ingresa la siguiente información:</li>
                <ul>
                  <li>Número de cuenta del destinatario.</li>
                  <li>CVU del destinatario.</li>
                  <li>Monto de la transferencia.</li>
                </ul>
                <li>Haz clic en el botón "Transferir".</li>
              </ol>
          </div>
        }
      />
     
     <FAQItem
        question="Cómo pagar un servicio"
        answer={
          <div>
            <p>Para pagar un servicio, sigue estos pasos:</p>
              <ol>
                <li>Inicia sesión en tu cuenta.</li>
                <li>Haz clic en la pestaña "Pagos".</li>
                <li>En la sección "Nuevo Pago", selecciona el servicio que deseas pagar.</li>
                <li>Ingresa la siguiente información:</li>
                <ul>
                  <li>Número de factura.</li>
                  <li>Monto del pago.</li>
                </ul>
                <li>Haz clic en el botón "Pagar".</li>
              </ol>
          </div>
        }
      />
      
    </div>
  );
}

export default FAQSection;
