import Transcription, { ITranscription } from "../models/Transcription";

export async function createTranscription(audioUrl: string): Promise<ITranscription> {
  const transcription = "transcribed text"; // Mock transcription
  return await Transcription.create({ audioUrl, transcription });
}

export async function listTranscriptions(): Promise<ITranscription[]> {
  return await Transcription.find().sort({ createdAt: -1 });
}
