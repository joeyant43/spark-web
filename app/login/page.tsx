"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";

export default function LoginPage() {
  const { user, loading, signInWithGoogle } = useAuth();
  const router = useRouter();
  const [signingIn, setSigningIn] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!loading && user) {
      router.replace("/app");
    }
  }, [user, loading, router]);

  const handleGoogle = async () => {
    setSigningIn(true);
    setError("");
    try {
      await signInWithGoogle();
      router.push("/app");
    } catch {
      setError("Sign-in failed. Please try again.");
      setSigningIn(false);
    }
  };

  const handleGuest = () => {
    router.push("/app/questionnaire?guest=true");
  };

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "#0f0e17" }}
      >
        <div className="text-2xl" style={{ color: "#ff9500" }}>⚡</div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
      style={{ background: "#0f0e17" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,149,0,0.07) 0%, transparent 70%)" }}
      />

      {/* Card */}
      <div
        className="w-full max-w-sm rounded-3xl p-8 border relative"
        style={{ background: "#16151f", borderColor: "#2a2535" }}
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <div
              className="text-4xl font-black mb-2"
              style={{ color: "#ff9500", textShadow: "0 0 24px rgba(255,149,0,0.5)" }}
            >
              ⚡ Spark
            </div>
          </Link>
          <p className="text-sm" style={{ color: "#9e9889" }}>
            Sign in to save your ideas and sync across devices
          </p>
        </div>

        {/* Google Sign In */}
        <button
          onClick={handleGoogle}
          disabled={signingIn}
          className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl font-semibold text-sm border transition hover:bg-white/5 mb-4 disabled:opacity-50"
          style={{ borderColor: "#2a2535", color: "#f5f0e8" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          {signingIn ? "Signing in…" : "Continue with Google"}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px" style={{ background: "#2a2535" }} />
          <span className="text-xs" style={{ color: "#5a5462" }}>or</span>
          <div className="flex-1 h-px" style={{ background: "#2a2535" }} />
        </div>

        {/* Guest mode */}
        <button
          onClick={handleGuest}
          className="w-full py-3.5 rounded-xl font-semibold text-sm border transition hover:border-amber-DEFAULT"
          style={{ borderColor: "#2a2535", color: "#9e9889" }}
        >
          Continue as Guest
        </button>

        {error && (
          <p className="text-center text-sm mt-4" style={{ color: "#ff5e3a" }}>
            {error}
          </p>
        )}

        <p className="text-center text-xs mt-6" style={{ color: "#5a5462" }}>
          By continuing, you agree to our{" "}
          <a href="/terms" className="underline hover:text-white transition">
            Terms
          </a>{" "}
          &{" "}
          <a href="/privacy" className="underline hover:text-white transition">
            Privacy Policy
          </a>
        </p>
      </div>

      <Link
        href="/"
        className="mt-6 text-sm transition"
        style={{ color: "#5a5462" }}
      >
        ← Back to home
      </Link>
    </div>
  );
}
