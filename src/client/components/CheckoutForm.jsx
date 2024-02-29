import "./CheckoutForm.css";
import { Link } from "react-router-dom";

export default function CheckoutForm() {
  return (
    <div className="checkout-form-page">
      <div className="contact-info">
        <h2>Detalles de contacto</h2>
        <form className="contact-info-form" action="">
          <label htmlFor="firstname">Nombre</label>
          <input type="text" name="firstname" id="firstname" />

          <label htmlFor="lastname">Apellido</label>
          <input type="text" name="lastname" id="lastname" />

          <label htmlFor="email">Correo electrónico</label>
          <input type="email" name="email" id="email" />

          <label htmlFor="phone">Teléfono</label>
          <input type="text" name="phone" id="phone" />
        </form>
      </div>

      <div className="payment">
        <h2>Datos de la tarjeta</h2>

        <form className="payment-form" action="">
          <label htmlFor="name">Nombre del titular</label>
          <input type="text" name="name" id="name" />

          <label htmlFor="card-number">Número de la tarjeta</label>
          <input type="text" name="card-number" id="card-number" />

          <div className="expiry-date__cvc">
            <div>
              <label htmlFor="expiry-date">Vencimiento</label>
              <input type="text" name="expiry-date" id="expiry-date" />
            </div>
            <div>
              <label htmlFor="cvc">CVC</label>
              <input type="text" name="cvc" id="cvc" />
            </div>
          </div>
        </form>
      </div>

      <div className="book-and-pay">
        <Link to={`/404`}>
          <input type="submit" value="Reservar y pagar" />
        </Link>
      </div>
    </div>
  );
}
