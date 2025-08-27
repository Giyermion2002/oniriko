
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// PRUEBA STRAPE


import { useState } from "react";
import './App.scss';

function App() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4242/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // Redirigir a Stripe Checkout
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <div className='page-menu'>hola</div>
      <h1 className="text-2xl font-bold">Stripe PoC ⚡️</h1>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Cargando..." : "Comprar camiseta (20€)"}
      </button>
    </div>
  );
}

export default App;





// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// PRUEBA PAYPAL


// import { useEffect, useRef } from "react";
// import { loadScript } from "@paypal/paypal-js";

// function App() {
//   const paypalRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     loadScript({ "client-id": "AZi5GEFXukDWvuQ1SMIDdnzh5RSRsEf3uwvQLAfoqO4eRB0l_WOCGfEIA99yB4DMLmq6jlLc1oOGQhWH" }) // "test" funciona para sandbox
//       .then(() => {
//         if (!paypalRef.current) return;

//         // window.paypal ya está disponible
//         window.paypal.Buttons({
//           createOrder: async () => {
//             const res = await fetch("http://localhost:4242/create-order", {
//               method: "POST",
//             });
//             const data = await res.json();
//             return data.id; // devuelve el order ID
//           },
//           onApprove: async (data) => {
//             const res = await fetch(
//               `http://localhost:4242/capture-order/${data.orderID}`,
//               { method: "POST" }
//             );
//             const details = await res.json();
//             alert(`Pago completado por ${details.payer.name.given_name}`);
//           },
//         }).render(paypalRef.current);
//       })
//       .catch((err) => {
//         console.error("Error cargando PayPal SDK:", err);
//       });
//   }, []);

//   return (
//     <div className="h-screen flex flex-col items-center justify-center gap-4">
//       <h1 className="text-2xl font-bold">PayPal PoC 💸</h1>
//       <div ref={paypalRef}></div>
//     </div>
//   );
// }

// export default App;
