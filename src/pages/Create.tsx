import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { create } from "../data/content";

type ModeId = (typeof create.modes)[number]["id"];

type RequestState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; imageUrl: string };

export default function Create() {
  const [mode, setMode] = useState<ModeId>("preserve");
  const [designNotes, setDesignNotes] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [request, setRequest] = useState<RequestState>({ status: "idle" });
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0] ?? null;
    setFile(selected);
    setPreviewUrl(selected ? URL.createObjectURL(selected) : null);
  }

  async function handleGenerate() {
    if (!file) {
      setRequest({ status: "error", message: "Please upload a photo of your home first." });
      return;
    }

    setRequest({ status: "loading" });

    try {
      const formData = new FormData();
      formData.append("photo", file);
      formData.append("mode", mode);
      formData.append("designNotes", designNotes);

      const res = await fetch("/api/remodel", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? `Request failed with status ${res.status}`);
      }

      const data = await res.json();
      setRequest({ status: "success", imageUrl: data.imageUrl });
    } catch (err) {
      setRequest({
        status: "error",
        message:
          err instanceof Error
            ? err.message
            : "Something went wrong generating your design. Please try again.",
      });
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <section className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl">🏠 {create.heading}</h1>
        <p className="mt-4 text-charcoal-500">{create.intro}</p>
      </section>

      <section className="mt-12 space-y-8 rounded-lg border border-charcoal-100 bg-white p-8">
        <div>
          <h2 className="text-lg font-medium text-charcoal-900">1. Remodel Style</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {create.modes.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setMode(m.id)}
                className={`rounded-md border p-4 text-left transition-colors ${
                  mode === m.id
                    ? "border-brand-500 bg-brand-50"
                    : "border-charcoal-100 hover:border-brand-300"
                }`}
              >
                <p className="font-medium text-charcoal-900">{m.label}</p>
                <p className="mt-1 text-sm text-charcoal-500">{m.description}</p>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium text-charcoal-900">2. Your Design Requests</h2>
          <textarea
            value={designNotes}
            onChange={(e) => setDesignNotes(e.target.value)}
            placeholder="e.g. Change the siding to navy blue board-and-batten, add a black metal roof..."
            rows={3}
            className="mt-3 w-full rounded-md border border-charcoal-200 p-3 text-sm focus:border-brand-400 focus:outline-none"
          />
        </div>

        <div>
          <h2 className="text-lg font-medium text-charcoal-900">3. Upload Your House Photo</h2>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-3 block w-full text-sm text-charcoal-500 file:mr-4 file:rounded-md file:border-0 file:bg-brand-500 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-brand-600"
          />
          {previewUrl && (
            <img src={previewUrl} alt="Uploaded house preview" className="mt-4 max-h-64 rounded-md border border-charcoal-100 object-cover" />
          )}
        </div>

        <button
          type="button"
          onClick={handleGenerate}
          disabled={request.status === "loading"}
          className="w-full rounded-md bg-brand-500 px-6 py-3 font-medium text-white transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {request.status === "loading" ? "Generating..." : "Generate My Design ✨"}
        </button>

        {request.status === "error" && (
          <p className="rounded-md bg-red-50 p-4 text-sm text-red-700">{request.message}</p>
        )}
      </section>

      {request.status === "success" && (
        <section className="mt-8 rounded-lg border border-charcoal-100 bg-white p-8 text-center">
          <h2 className="text-xl">✨ Your Customized Remodel</h2>
          <img
            src={request.imageUrl}
            alt="AI-generated remodel design"
            className="mx-auto mt-4 max-h-[480px] rounded-md object-cover"
          />
          <Link
            to="/contact"
            className="mt-6 inline-block rounded-md bg-brand-500 px-6 py-3 font-medium text-white transition-colors hover:bg-brand-600"
          >
            Approve & Request a Quote ✅
          </Link>
        </section>
      )}
    </div>
  );
}
