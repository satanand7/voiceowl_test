export type Transcription = {
  _id: string;
  audioUrl: string;
  transcription: string;
  createdAt: string;
};

export async function createTranscription(audioUrl: string): Promise<{ id: string }> {
  const res = await fetch('/api/transcription', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ audioUrl }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error || `Request failed: ${res.status}`);
  }
  return res.json();
}

export async function listTranscriptions(): Promise<Transcription[]> {
  const res = await fetch('/api/transcriptions');
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}
