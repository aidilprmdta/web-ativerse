import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function InstrumentsList() {
  const [instruments, setInstruments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchInstruments() {
      const { data, error } = await supabase.from("instruments").select();
      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }
      setInstruments(data);
      setLoading(false);
    }
    fetchInstruments();
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading instruments...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <ul className="list-disc list-inside text-center">
      {instruments.map((instrument) => (
        <li key={instrument.id}>{instrument.name}</li>
      ))}
    </ul>
  );
}
