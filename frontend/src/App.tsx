import { useEffect, useState } from "react";
import TranscriptionForm from "./components/Form/TranscriptionForm";
import TranscriptionList from "./components/List/TranscriptionList";
import Alert from "./components/UI/Alert";
import { listTranscriptions, type Transcription } from "./lib/api";

export default function App() {
  const [items, setItems] = useState<Transcription[]>([]);
  const [successId, setSuccessId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function refreshList() {
    setError(null);
    try {
      const data = await listTranscriptions();
      setItems(data);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  }

  useEffect(() => {
    refreshList();
  }, []);

  return (
    <div className="max-w-3xl mx-auto py-8 space-y-6">
      <h1 className="text-2xl font-bold">VoiceOwl • Transcriptions</h1>
      <TranscriptionForm
        onSuccess={(id) => {
          setSuccessId(id);
          refreshList();
        }}
      />
      {!error && successId && <Alert type="success">Created transcription with ID: {successId}</Alert>}
      {error && <Alert type="error">{error}</Alert>}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Recent Transcriptions</h2>
        <button
          onClick={refreshList}
          className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
        >
          Refresh
        </button>
      </div>
      <TranscriptionList items={items} />
    </div>
  );
}
