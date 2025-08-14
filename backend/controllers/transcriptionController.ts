import { Request, Response } from "express";
import { createTranscription, listTranscriptions } from "../services/transcriptionService";

export async function postTranscription(req: Request, res: Response) {
  try {
    const { audioUrl } = req.body;
    if (!audioUrl) return res.status(400).json({ error: "audioUrl is required" });

    const record = await createTranscription(audioUrl);
    res.json({ id: record._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}

export async function getTranscriptions(req: Request, res: Response) {
  try {
    const data = await listTranscriptions();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
}
