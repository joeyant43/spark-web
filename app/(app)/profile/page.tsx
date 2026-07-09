"use client";

import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import Link from "next/link";

const platforms = ["TikTok", "YouTube", "Instagram", "Twitch"];

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("spark_answers");
      localStorage.removeItem("spark_ideas");
      localStorage.removeItem("spark_saved");
    }
    await logout();
    router.push("/");
  };

  const handleClearData = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("spark_answers");
      localStorage.removeItem("spark_ideas");
      localStorage.removeItem("spark_saved");
    }
    router.push("/app/questionnaire");
  };

  return (
    <div>
      {/* User card */}
      <div
        className="rounded-2xl p-6 mb-6 border text-center"
        style={{ background: "#16151f", borderColor: "#2a2535" }}
      >
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt={user.displayName || "User"}
            className="w-20 h-20 rounded-full mx-auto mb-4 border-2"
            style={{ borderColor: "#ff9500" }}
          />
        ) : (
          <div
            className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl border-2"
            style={{ background: "#1e1c2e", borderColor: "#ff9500" }}
          >
            👤
          </div>
        )}
        <h2 className="text-xl font-bold mb-1" style={{ color: "#f5f0e8" }}>
          {user?.displayName || "Guest Creator"}
        </h2>
        <p className="text-sm" style={{ color: "#9e9889" }}>
          {user?.email || "Not signed in"}
        </p>
      </div>

      {/* Platform connections */}
      <div
        className="rounded-2xl p-5 mb-6 border"
        style={{ background: "#16151f", borderColor: "#2a2535" }}
      >
        <h3 className="font-bold mb-4" style={{ color: "#f5f0e8" }}>Platform Connections</h3>
        <div className="space-y-3">
          {[
            { name: "YouTube", icon: "▶️", color: "#ff0000" },
            { name: "TikTok", icon: "🎵", color: "#ff0050" },
            { name: "Instagram", icon: "📸", color: "#e1306c" },
            { name: "Twitch", icon: "💜", color: "#9146ff" },
          ].map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-between p-3 rounded-xl border"
              style={{ borderColor: "#2a2535" }}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{p.icon}</span>
                <span className="font-medium text-sm" style={{ color: "#f5f0e8" }}>{p.name}</span>
              </div>
              <button
                className="text-xs px-3 py-1.5 rounded-full font-semibold border transition hover:scale-105"
                style={{ borderColor: p.color, color: p.color, background: p.color + "10" }}
              >
                Connect
              </button>
            </div>
          ))}
        </div>
        <p className="text-xs mt-4" style={{ color: "#5a5462" }}>
          Connect your accounts to get AI-powered ideas based on your actual content performance.
        </p>
      </div>

      {/* Quick links */}
      {!user && (
        <div
          className="rounded-2xl p-5 mb-6 border"
          style={{ background: "rgba(255,149,0,0.06)", borderColor: "#ff9500" }}
        >
          <p className="text-sm font-semibold mb-3" style={{ color: "#f5f0e8" }}>
            ⚡ Sign in to sync your ideas across devices
          </p>
          <Link
            href="/login"
            className="inline-block px-5 py-2.5 rounded-full text-sm font-bold transition hover:scale-105"
            style={{ background: "#ff9500", color: "#0f0e17" }}
          >
            Sign In
          </Link>
        </div>
      )}

      {/* Settings */}
      <div
        className="rounded-2xl p-5 mb-6 border"
        style={{ background: "#16151f", borderColor: "#2a2535" }}
      >
        <h3 className="font-bold mb-4" style={{ color: "#f5f0e8" }}>Settings</h3>
        <div className="space-y-3">
          <button
            onClick={() => router.push("/app/questionnaire")}
            className="w-full flex items-center justify-between p-3 rounded-xl border transition hover:border-amber-DEFAULT text-left"
            style={{ borderColor: "#2a2535" }}
          >
            <span className="text-sm font-medium" style={{ color: "#f5f0e8" }}>Update Preferences</span>
            <span style={{ color: "#9e9889" }}>→</span>
          </button>
          <button
            onClick={handleClearData}
            className="w-full flex items-center justify-between p-3 rounded-xl border transition hover:border-amber-DEFAULT text-left"
            style={{ borderColor: "#2a2535" }}
          >
            <span className="text-sm font-medium" style={{ color: "#f5f0e8" }}>Reset & Start Over</span>
            <span style={{ color: "#9e9889" }}>→</span>
          </button>
        </div>
      </div>

      {/* Danger zone */}
      {user && (
        <div
          className="rounded-2xl p-5 border"
          style={{ borderColor: "#ff4444" }}
        >
          <h3 className="font-bold mb-4 text-sm uppercase tracking-wide" style={{ color: "#ff4444" }}>
            Danger Zone
          </h3>
          <button
            onClick={handleLogout}
            className="w-full py-3 rounded-xl text-sm font-semibold transition hover:opacity-80"
            style={{ background: "#ff4444", color: "#fff" }}
          >
            Sign Out & Clear Data
          </button>
        </div>
      )}
    </div>
  );
}
