import { useNavigate } from "react-router-dom";

export function PrivacyPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white px-5 py-10">
      <div className="max-w-md mx-auto">
        <button
    onClick={() => navigate(-1)}
    className="mb-6 rounded bg-red-700 text-white px-3 py-2"
    >
    ← Indietro
    </button>

        <h1 className="text-2xl font-semibold mb-6">Privacy Policy</h1>

        <p className="text-sm text-gray-300 mb-4">
          La presente informativa descrive le modalità di gestione dei dati personali degli utenti che accedono al sito della Pizzeria DoppioZero.
        </p>

        <h2 className="font-medium mt-4 mb-2">Titolare del trattamento</h2>
        <ul className="text-sm text-gray-400 mb-4 list-disc pl-4">
          <li>Pizzeria DoppioZero</li>
          <li>Indirizzo: Str. del Recioto, 11, 37024, Negrar di Valpolicella (VR)</li>
          <li>Telefono: 045 631 9169 </li>
        </ul>

        <h2 className="font-medium mt-4 mb-2">Tipologia di dati raccolti</h2>
        <p className="text-sm text-gray-400 mb-4">
          Attraverso il sito viene raccolto esclusivamente il numero di telefono inserito volontariamente dall’utente.
        </p>

        <h2 className="font-medium mt-4 mb-2">Base giuridica (GDPR)</h2>
        <p className="text-sm text-gray-400 mb-4">
          Il trattamento avviene previo consenso esplicito dell’utente.
        </p>

        <h2 className="font-medium mt-4 mb-2">Finalità del trattamento</h2>
        <ul className="text-sm text-gray-400 mb-4 list-disc pl-4">
          <li>offerte e promozioni</li>
          <li>contatto tramite WhatsApp su richiesta dell'utente</li>
        </ul>

        <h2 className="font-medium mt-4 mb-2">Conservazione dei dati</h2>
        <p className="text-sm text-gray-400 mb-4">
          I dati personali sono conservati per il tempo necessario a garantire il corretto svolgimento delle finalità per le quali sono stati raccolti o fino a quando l’utente ne richiede la cancellazione.
        </p>

        <h2 className="font-medium mt-4 mb-2">Diritti dell'utente</h2>
        <p className="text-sm text-gray-400 mt-6">
          L’utente può richiedere in qualsiasi momento la cancellazione o modifica dei propri dati.
        </p>
      </div>
    </div>
  );
}