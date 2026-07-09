"use client";

import Link from "next/link";
import { useState } from "react";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen" style={{ background: "#0f0e17", color: "#f5f0e8" }}>
      {/* Nav */}
      <nav
        className="fixed top-0 w-full z-50 border-b"
        style={{
          background: "rgba(15,14,23,0.8)",
          backdropFilter: "blur(12px)",
          borderColor: "#2a2535",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tight" style={{ color: "#ff9500", textShadow: "0 0 20px rgba(255,149,0,0.4)" }}>
            ⚡ Spark
          </div>
          <div className="hidden md:flex gap-8 text-sm" style={{ color: "#9e9889" }}>
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#how-it-works" className="hover:text-white transition">How It Works</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
          </div>
          <div className="flex gap-3 items-center">
            <Link
              href="/login"
              className="text-sm font-medium transition"
              style={{ color: "#9e9889" }}
            >
              Sign in
            </Link>
            <Link
              href="/login"
              className="px-5 py-2 rounded-full text-sm font-bold transition hover:scale-105"
              style={{ background: "#ff9500", color: "#0f0e17" }}
            >
              Get Started →
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        {/* Ambient glow blobs */}
        <div
          className="absolute top-20 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,149,0,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,94,58,0.06) 0%, transparent 70%)" }}
        />

        <div className="max-w-5xl mx-auto text-center relative">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border"
            style={{ borderColor: "#ff9500", color: "#ff9500", background: "rgba(255,149,0,0.08)" }}
          >
            ⚡ Built for Creators
          </div>

          <h1
            className="text-6xl md:text-8xl font-black leading-none mb-6"
            style={{ color: "#f5f0e8" }}
          >
            Never Run Out
            <br />
            <span style={{ color: "#ff9500", textShadow: "0 0 40px rgba(255,149,0,0.4)" }}>
              of Ideas.
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto" style={{ color: "#9e9889" }}>
            Generate personalized, trending content ideas for YouTube, TikTok,
            Instagram & Twitch — tailored to your niche.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/login"
              className="px-10 py-4 rounded-full text-lg font-bold transition hover:scale-105"
              style={{ background: "#ff9500", color: "#0f0e17", boxShadow: "0 0 30px rgba(255,149,0,0.4)" }}
            >
              Start Free →
            </Link>
            <a
              href="#how-it-works"
              className="px-10 py-4 rounded-full text-lg font-semibold border transition hover:border-amber-DEFAULT"
              style={{ borderColor: "#2a2535", color: "#f5f0e8" }}
            >
              See How It Works
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { value: "15", label: "Ideas / Session" },
              { value: "4+", label: "Platforms" },
              { value: "∞", label: "Creativity" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-black mb-1" style={{ color: "#ff9500" }}>{s.value}</div>
                <div className="text-sm" style={{ color: "#9e9889" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview mockup */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-6 border"
            style={{ background: "#16151f", borderColor: "#2a2535" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full" style={{ background: "#ff5e3a" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#ff9500" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#2a2535" }} />
              <span className="text-xs ml-2" style={{ color: "#5a5462" }}>spark.app — dashboard</span>
            </div>
            <div className="space-y-3">
              {[
                { title: "🔴 LIVE: Gaming Ranked Grind", tag: "TRENDING", tagColor: "#ff0050", pop: 98 },
                { title: "POV: The time I almost quit Gaming", tag: "STORY", tagColor: "#ff9500", pop: 88 },
                { title: "5 Mistakes Every New Creator Makes", tag: "TIPS", tagColor: "#34d399", pop: 85 },
              ].map((idea) => (
                <div
                  key={idea.title}
                  className="flex items-center gap-4 rounded-xl p-4 border-l-4"
                  style={{ background: "#1e1c2e", borderLeftColor: idea.tagColor }}
                >
                  <div className="flex-1">
                    <div className="font-semibold text-sm mb-1" style={{ color: "#f5f0e8" }}>{idea.title}</div>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded"
                        style={{ background: idea.tagColor + "20", color: idea.tagColor }}
                      >
                        {idea.tag}
                      </span>
                      <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: "#2a2535" }}>
                        <div className="h-full rounded-full" style={{ width: `${idea.pop}%`, background: idea.tagColor }} />
                      </div>
                      <span className="text-xs" style={{ color: "#9e9889" }}>{idea.pop}%</span>
                    </div>
                  </div>
                  <div className="text-lg">⭐</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4" style={{ color: "#f5f0e8" }}>
            Everything you need to{" "}
            <span style={{ color: "#ff9500" }}>create more.</span>
          </h2>
          <p className="text-center mb-16" style={{ color: "#9e9889" }}>
            Spark handles the strategy so you can focus on the content.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "Personalized Ideas",
                desc: "Get content ideas tailored to your niche, platform, and style. No more generic suggestions.",
                accent: "#ff9500",
              },
              {
                icon: "📈",
                title: "Trending Topics",
                desc: "Stay ahead of the algorithm with real-time trends from YouTube, TikTok, Instagram & Twitch.",
                accent: "#ff5e3a",
              },
              {
                icon: "🎬",
                title: "8 Content Formats",
                desc: "POV/Story, React/Commentary, Tutorial, Mashup, Series, Collab, Community & Twist formats.",
                accent: "#ffb347",
              },
              {
                icon: "🔴",
                title: "Live Stream Ideas",
                desc: "70% of ideas are optimized for live streaming — the highest-engagement format on every platform.",
                accent: "#ff0050",
              },
              {
                icon: "🎮",
                title: "Gaming Database",
                desc: "Trending games database with viral new releases. Always know what to stream next.",
                accent: "#a78bfa",
              },
              {
                icon: "💾",
                title: "Save & Organize",
                desc: "Save your best ideas, track what you've used, and build your content pipeline.",
                accent: "#34d399",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl border transition hover:scale-[1.02]"
                style={{
                  background: "#16151f",
                  borderColor: "#2a2535",
                }}
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: f.accent }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9e9889" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6" style={{ background: "#16151f" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4" style={{ color: "#f5f0e8" }}>
            How It Works
          </h2>
          <p className="text-center mb-16" style={{ color: "#9e9889" }}>
            From zero to 15 ideas in under a minute.
          </p>

          <div className="space-y-10">
            {[
              {
                num: "01",
                title: "Answer 4 Quick Questions",
                desc: "Tell us your platform, niche, content style, and goal. No account needed to start.",
              },
              {
                num: "02",
                title: "Get 15 Personalized Ideas",
                desc: "Spark generates ideas with trending data, popularity scores, and ready-to-use hashtags.",
              },
              {
                num: "03",
                title: "Save Your Favorites",
                desc: "Star the ideas you love. They sync to your profile so you always have a content backlog.",
              },
              {
                num: "04",
                title: "Create & Grow",
                desc: "Focus on making great content. Come back anytime for a fresh batch of ideas.",
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black"
                  style={{ background: "rgba(255,149,0,0.12)", color: "#ff9500", border: "2px solid rgba(255,149,0,0.2)" }}
                >
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold mb-1" style={{ color: "#f5f0e8" }}>{step.title}</h3>
                  <p style={{ color: "#9e9889" }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4" style={{ color: "#f5f0e8" }}>
            Simple Pricing
          </h2>
          <p className="text-center mb-16" style={{ color: "#9e9889" }}>
            Start free. Upgrade when you need more.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Free */}
            <div
              className="p-8 rounded-2xl border"
              style={{ background: "#16151f", borderColor: "#2a2535" }}
            >
              <h3 className="text-xl font-bold mb-2" style={{ color: "#f5f0e8" }}>Free</h3>
              <div className="text-4xl font-black mb-6" style={{ color: "#f5f0e8" }}>
                $0<span className="text-base font-normal" style={{ color: "#9e9889" }}>/mo</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm" style={{ color: "#9e9889" }}>
                {["15 ideas per day", "1 platform", "Basic trends", "Save up to 10 ideas"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span style={{ color: "#ff9500" }}>✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/login"
                className="block w-full py-3 rounded-xl text-center font-semibold border transition hover:bg-white/5"
                style={{ borderColor: "#2a2535", color: "#f5f0e8" }}
              >
                Get Started Free
              </Link>
            </div>

            {/* Pro — highlighted */}
            <div
              className="p-8 rounded-2xl border-2 relative"
              style={{ background: "rgba(255,149,0,0.05)", borderColor: "#ff9500", boxShadow: "0 0 40px rgba(255,149,0,0.15)" }}
            >
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest"
                style={{ background: "#ff9500", color: "#0f0e17" }}
              >
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#f5f0e8" }}>Pro</h3>
              <div className="text-4xl font-black mb-6" style={{ color: "#ff9500" }}>
                $9<span className="text-base font-normal" style={{ color: "#9e9889" }}>/mo</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm" style={{ color: "#9e9889" }}>
                {["Unlimited ideas", "All 4 platforms", "Real-time trends", "Unlimited saves", "Analytics dashboard", "Export ideas"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span style={{ color: "#ff9500" }}>✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/login"
                className="block w-full py-3 rounded-xl text-center font-bold transition hover:scale-105"
                style={{ background: "#ff9500", color: "#0f0e17", boxShadow: "0 4px 20px rgba(255,149,0,0.3)" }}
              >
                Start Free Trial
              </Link>
            </div>

            {/* Team */}
            <div
              className="p-8 rounded-2xl border"
              style={{ background: "#16151f", borderColor: "#2a2535" }}
            >
              <h3 className="text-xl font-bold mb-2" style={{ color: "#f5f0e8" }}>Team</h3>
              <div className="text-4xl font-black mb-6" style={{ color: "#f5f0e8" }}>
                $29<span className="text-base font-normal" style={{ color: "#9e9889" }}>/mo</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm" style={{ color: "#9e9889" }}>
                {["Everything in Pro", "5 team members", "Shared workspace", "Collaboration tools", "Priority support", "Custom integrations"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span style={{ color: "#ffb347" }}>✓</span> {item}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:hello@tryspark.app"
                className="block w-full py-3 rounded-xl text-center font-semibold border transition hover:bg-white/5"
                style={{ borderColor: "#2a2535", color: "#f5f0e8" }}
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist / CTA */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        style={{ background: "#16151f" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(255,149,0,0.06) 0%, transparent 70%)" }}
        />
        <div className="max-w-2xl mx-auto text-center relative">
          <h2 className="text-4xl md:text-6xl font-black mb-4" style={{ color: "#f5f0e8" }}>
            Ready to{" "}
            <span style={{ color: "#ff9500", textShadow: "0 0 30px rgba(255,149,0,0.4)" }}>
              Spark
            </span>{" "}
            your creativity?
          </h2>
          <p className="mb-10" style={{ color: "#9e9889" }}>
            Join creators who never run out of ideas.
          </p>

          {submitted ? (
            <div
              className="px-8 py-4 rounded-2xl text-lg font-bold"
              style={{ background: "rgba(255,149,0,0.12)", border: "1px solid rgba(255,149,0,0.3)", color: "#ff9500" }}
            >
              ⚡ You&apos;re on the list! We&apos;ll be in touch.
            </div>
          ) : (
            <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-3.5 rounded-xl text-sm border"
                style={{ background: "#1e1c2e", borderColor: "#2a2535", color: "#f5f0e8" }}
              />
              <button
                type="submit"
                className="px-7 py-3.5 rounded-xl font-bold text-sm transition hover:scale-105"
                style={{ background: "#ff9500", color: "#0f0e17" }}
              >
                Join Waitlist
              </button>
            </form>
          )}

          <div className="mt-8">
            <Link
              href="/login"
              className="text-sm underline underline-offset-4 transition"
              style={{ color: "#9e9889" }}
            >
              Or get instant access →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t" style={{ borderColor: "#2a2535" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xl font-black" style={{ color: "#ff9500" }}>⚡ Spark</div>
          <div className="flex gap-8 text-sm" style={{ color: "#5a5462" }}>
            <a href="/privacy" className="hover:text-white transition">Privacy</a>
            <a href="/terms" className="hover:text-white transition">Terms</a>
            <a href="mailto:hello@tryspark.app" className="hover:text-white transition">Contact</a>
          </div>
          <div className="text-sm" style={{ color: "#5a5462" }}>
            © 2026 Spark. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
