import "./confirmation.css";
import NavBar from "../components/NavBar";

export default function Confirmation() {
  return (
    <>
      <NavBar />
      <div className="confirmation-message">
        <h2>¡Listo!</h2>
        <p>Tu viaje fue confirmado.</p>
      </div>
    </>
  );
}
