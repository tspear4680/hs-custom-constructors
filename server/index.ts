import "dotenv/config";
import path from "node:path";
import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
});

app.use(cors());

const distDir = path.resolve(process.cwd(), "dist");

const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN;
const REPLICATE_MODEL = "black-forest-labs/flux-kontext-pro";

const MODE_INSTRUCTIONS: Record<string, string> = {
  preserve:
    "Keep the exact shape, roofline, and structure of the house unchanged. Only update exterior materials, siding, paint colors, and finishes.",
  overhaul:
    "Reimagine this house with a completely new architectural style, including changes to the roofline, structure, and overall shape.",
};

app.post("/api/remodel", upload.single("photo"), async (req, res) => {
  if (!REPLICATE_API_TOKEN) {
    res.status(503).json({
      error:
        "The AI remodeling service isn't configured yet. Add REPLICATE_API_TOKEN to server/.env to enable it.",
    });
    return;
  }

  const file = req.file;
  if (!file) {
    res.status(400).json({ error: "No photo was uploaded." });
    return;
  }

  const mode = typeof req.body.mode === "string" ? req.body.mode : "preserve";
  const designNotes = typeof req.body.designNotes === "string" ? req.body.designNotes : "";
  const modeInstruction = MODE_INSTRUCTIONS[mode] ?? MODE_INSTRUCTIONS.preserve;
  const prompt = [modeInstruction, designNotes].filter(Boolean).join(" ");

  const dataUri = `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;

  try {
    const prediction = await fetch(
      `https://api.replicate.com/v1/models/${REPLICATE_MODEL}/predictions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${REPLICATE_API_TOKEN}`,
          "Content-Type": "application/json",
          Prefer: "wait",
        },
        body: JSON.stringify({
          input: {
            prompt,
            input_image: dataUri,
            aspect_ratio: "match_input_image",
          },
        }),
      }
    );

    if (!prediction.ok) {
      const body = await prediction.text();
      throw new Error(`Replicate API error (${prediction.status}): ${body}`);
    }

    const result = await prediction.json();
    const output = result.output;
    const imageUrl = Array.isArray(output) ? output[0] : output;

    if (!imageUrl) {
      throw new Error("Replicate did not return an image.");
    }

    res.json({ imageUrl });
  } catch (err) {
    console.error(err);
    res.status(502).json({
      error: err instanceof Error ? err.message : "Failed to generate design.",
    });
  }
});

// Serves the built frontend in production (Render runs this same process for
// both the API and the static site — no separate static host needed).
// Express 5's router no longer accepts a bare '*' wildcard string, so the SPA
// fallback below is a path-less middleware instead of a `.get('*', ...)` route.
app.use(express.static(distDir));
app.use((req, res, next) => {
  if (req.method !== "GET" || req.path.startsWith("/api")) {
    next();
    return;
  }
  res.sendFile(path.join(distDir, "index.html"));
});

const PORT = process.env.PORT || 8787;
app.listen(PORT, () => {
  console.log(`Remodel API server listening on http://localhost:${PORT}`);
});
