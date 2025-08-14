import { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Alert from "../UI/Alert";
import { createTranscription } from "../../lib/api";

interface Props {
  onSuccess: (id: string) => void;
}

export default function TranscriptionForm({ onSuccess }: Props) {
  const [audioUrl, setAudioUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!audioUrl.trim()) {
      setError("Please enter an audio URL");
      return;
    }
    setLoading(true);
    try {
      const { id } = await createTranscription(audioUrl.trim());
      onSuccess(id);
      setAudioUrl("");
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded-lg bg-white shadow-sm space-y-3">
      <label className="block text-sm font-medium text-gray-700">Audio URL</label>
      <Input
        type="url"
        placeholder="https://example.com/sample.mp3"
        value={audioUrl}
        onChange={(e) => setAudioUrl(e.target.value)}
        required
      />
      <Button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Create Transcription"}
      </Button>
      {error && <Alert type="error">{error}</Alert>}
    </form>
  );
}
