"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Idea, generateIdeas, Answers, nicheColors, platformColors } from "@/lib/ideas";

export default function DashboardPage() {
  const router = useRouter();
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [saved, setSaved] = useState<number[]>([]);
  const [answers, setAnswers] = useState<Answers>({});
  const [activeFilter, setActiveFilter] = useState<"all" | "live" | "saved">("all");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedAnswers = localStorage.getItem("spark_answers");
    const storedIdeas = localStorage.getItem("spark_ideas");
    const storedSaved = localStorage.getItem("spark_saved");

    if (!storedAnswers) {
      router.replace("/app/questionnaire");
      return;
    }
    const parsedAnswers = JSON.parse(storedAnswers);
    setAnswers(parsedAnswers);
    setIdeas(storedIdeas ? JSON.parse(storedIdeas) : generateIdeas(parsedAnswers));
    setSaved(storedSaved ? JSON.parse(storedSaved) : []);
  }, [router]);

  const toggleSave = (id: number) => {
    const updated = saved.includes(id) ? saved.filter((s) => s !== id) : [...saved, id];
    setSaved(updated);
    localStorage.setItem("spark_saved", JSON.stringify(updated));
  };

  const regenerate = () => {
    const fresh = generateIdeas(answers);
    setIdeas(fresh);
    localStorage.setItem("spark_ideas", JSON.stringify(fresh));
  };

  const filtered = ideas.filter((idea) => {
    if (activeFilter === "live") return idea.isLive;
    if (activeFilter === "saved") return saved.includes(idea.id);
    return true;
  });

  const niche = (answers.niche || [])[0] || "Creator";
  const platform = (answers.platform || [])[0] || "All Platforms";

  return (
    <div>
      {/* Header banner */}
      <div
        className="rounded-2xl p-5 mb-6 border"
        style={{ background: "#1a1100", borderColor: "#ff9500", boxShadow: "0 0 24px rgba(255,149,0,0.12)" }}
      >
        <div className="flex items-center gap-3">
          <span className="text-3xl">⚡</span>
          <div>
            <div className="font-bold text-lg" style={{ color: "#f5f0e8" }}>
              Your {niche} Ideas for {platform}
            </div>
            <div className="text-sm" style={{ color: "#ffb347" }}>
              {ideas.filter((i) => i.isLive).length} live streams · {ideas.length} total ideas
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        {(["all", "live", "saved"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className="px-4 py-2 rounded-full text-sm font-semibold border transition"
            style={{
              background: activeFilter === f ? "#ff9500" : "#16151f",
              borderColor: activeFilter === f ? "#ff9500" : "#2a2535",
              color: activeFilter === f ? "#0f0e17" : "#9e9889",
            }}
          >
            {f === "all" ? "All" : f === "live" ? "🔴 Live" : `⭐ Saved (${saved.length})`}
          </button>
        ))}
        <button
          onClick={regenerate}
          className="ml-auto px-4 py-2 rounded-full text-sm font-semibold border transition hover:border-amber-DEFAULT"
          style={{ borderColor: "#2a2535", color: "#9e9889" }}
        >
          🔄 Refresh
        </button>
      </div>

      {/* Ideas list */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div
            className="rounded-2xl p-10 text-center border border-dashed"
            style={{ borderColor: "#2a2535" }}
          >
            <div className="text-4xl mb-3">✨</div>
            <div className="font-semibold mb-1" style={{ color: "#f5f0e8" }}>No ideas here yet</div>
            <div className="text-sm" style={{ color: "#9e9889" }}>
              {activeFilter === "saved" ? "Star ideas to save them here." : "Hit refresh to generate new ideas."}
            </div>
          </div>
        ) : (
          filtered.map((idea, i) => {
            const categoryColor = nicheColors[idea.category] || nicheColors.Other;
            const platformColor = platformColors[idea.platform] || "#ff9500";
            const borderColor = idea.isLive ? "#ff0050" : categoryColor.primary;
            const isSaved = saved.includes(idea.id);

            return (
              <div
                key={idea.id}
                className="rounded-2xl p-4 border-l-4 border"
                style={{
                  background: "#16151f",
                  borderLeftColor: borderColor,
                  borderColor: "#2a2535",
                }}
              >
                {/* Badges row */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {idea.isLive && (
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wide border"
                      style={{ color: "#ff0050", borderColor: "#ff0050", background: "rgba(255,0,80,0.08)" }}
                    >
                      🔴 LIVE
                    </span>
                  )}
                  {idea.contentFormat && (
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-bold border"
                      style={{ color: categoryColor.primary, borderColor: categoryColor.primary, background: categoryColor.primary + "15" }}
                    >
                      {idea.contentFormat}
                    </span>
                  )}
                  <span
                    className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide border"
                    style={{ color: categoryColor.primary, borderColor: categoryColor.primary, background: categoryColor.primary + "15" }}
                  >
                    {idea.category}
                  </span>
                  {idea.platform && idea.platform !== "your platform" && (
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-bold border"
                      style={{ color: platformColor, borderColor: platformColor, background: platformColor + "15" }}
                    >
                      {idea.platform}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex gap-3 items-start">
                  <div
                    className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-black"
                    style={{ background: borderColor + "20", color: borderColor }}
                  >
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm mb-1 leading-snug" style={{ color: "#f5f0e8" }}>
                      {idea.title}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: "#9e9889" }}>
                      {idea.description}
                    </p>

                    {/* Popularity bar */}
                    <div className="flex items-center gap-2 mt-3">
                      <div
                        className="flex-1 h-1 rounded-full overflow-hidden"
                        style={{ background: "#1e1c2e" }}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${idea.popularity}%`, background: borderColor }}
                        />
                      </div>
                      <span className="text-xs" style={{ color: "#9e9889" }}>{idea.popularity}%</span>
                    </div>
                  </div>

                  {/* Save button */}
                  <button
                    onClick={() => toggleSave(idea.id)}
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition hover:scale-110"
                    style={{
                      background: isSaved ? "rgba(255,149,0,0.15)" : "#1e1c2e",
                      color: isSaved ? "#ff9500" : "#5a5462",
                    }}
                    title={isSaved ? "Remove from saved" : "Save idea"}
                  >
                    {isSaved ? "⭐" : "☆"}
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Regenerate button */}
      {filtered.length > 0 && (
        <div className="mt-8 pb-4">
          <button
            onClick={regenerate}
            className="w-full py-4 rounded-2xl font-bold transition hover:scale-[1.02]"
            style={{ background: "#ff9500", color: "#0f0e17", boxShadow: "0 4px 20px rgba(255,149,0,0.3)" }}
          >
            🔄 Generate New Ideas
          </button>
          <button
            onClick={() => router.push("/app/questionnaire")}
            className="w-full py-3 mt-3 rounded-2xl text-sm transition border"
            style={{ borderColor: "#2a2535", color: "#9e9889" }}
          >
            Change my preferences
          </button>
        </div>
      )}
    </div>
  );
}
