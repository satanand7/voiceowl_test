import type { Transcription } from "../../lib/api";
import TranscriptionListItem from "./TranscriptionListItem";

export default function TranscriptionList({ items }: { items: Transcription[] }) {
  if (!items.length) {
    return <p className="text-gray-500">No transcriptions yet.</p>;
  }
  return (
    <ul className="space-y-2 mt-3">
      {items.map((t) => (
        <TranscriptionListItem key={t._id} t={t} />
      ))}
    </ul>
  );
}
