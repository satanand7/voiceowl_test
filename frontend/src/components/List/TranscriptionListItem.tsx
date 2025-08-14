import type { Transcription } from "../../lib/api";

export default function TranscriptionListItem({ t }: { t: Transcription }) {
  return (
    <li className="border p-3 rounded-lg bg-white shadow-sm">
      <div className="font-semibold">{t.audioUrl}</div>
      <div className="text-sm mt-1">{t.transcription}</div>
      <div className="text-xs text-gray-500 mt-1">{new Date(t.createdAt).toLocaleString()}</div>
      <div className="text-xs text-gray-400 mt-1">ID: {t._id}</div>
    </li>
  );
}
