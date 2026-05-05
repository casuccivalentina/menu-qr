import { useState } from "react";

export default function MenuLanding() {
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = () => {
  if (!phone || !consent) {
    alert("Accetta il consenso alla privacy");
    return;
  }

  const numeroRistorante = "390456319169"; // <-- metti il tuo numero

  const messaggio = encodeURIComponent(
    "Ciao! Vorrei ricevere lo sconto 🍕"
  );

  window.location.href = `https://wa.me/${numeroRistorante}?text=${messaggio}`;
};

  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-center relative flex items-center"
      style={{ backgroundImage: "url('/doppiozero.jpeg')" }}
    >
      {/* overlay più elegante */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/70 to-black/80"></div>

      <div className="relative z-10 max-w-lg max-w-sm mx-auto px-4 pb-20 text-white ">
        <h1 className="text-xl font-light mb-1 tracking-tight">
          Scopri il nostro menu!
        </h1>

        <p className="text-gray-400 font-extralight text-sm mb-4">
          Scegli come accedere 
        </p>

        {/* OPZIONE A */}
        <button
          onClick={() => (window.location.href = "/MenuDZ.pdf")}
          className="w-full mb-3 border border-white/20 py-3 rounded-xl text-white text-sm font-medium hover:border-white/40 transition"
        >
          Accedi subito al menu
        </button>

        {/* OPZIONE B */}
        <div className="border border-red-500/40 rounded-xl p-4 bg-black/40">
          <p className="text-sm font-medium mb-3">
            🎁 10% di sconto su WhatsApp
          </p>

          <input
            type="tel"
            placeholder="Numero di telefono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-black/60 border border-white/20 text-white placeholder-gray-500 rounded-lg p-2 mb-3 text-sm focus:outline-none focus:border-red-500"
          />
          

          <div className="flex items-start gap-2 text-left mb-3">
            <input
              type="checkbox"
              checked={consent}
              onChange={() => setConsent(!consent)}
            />
            <span className="text-xs text-gray-400">
              Accetto di essere contattato su WhatsApp per offerte esclusive
            </span>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-red-600 hover:bg-red-700 transition text-white py-3 rounded-xl text-sm font-medium"
          >
            Accedi e ottieni sconto
          </button>
          <p className="text-xs text-gray-400 mt-4">
            <a href="/privacy" className="underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
