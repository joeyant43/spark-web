"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for your interest! We'll notify ${email} when we launch.`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-spark-purple via-spark-blue to-spark-pink bg-clip-text text-transparent">
            ✨ Spark
          </div>
          <div className="flex gap-6">
            <a href="#features" className="hover:text-spark-purple transition">Features</a>
            <a href="#how-it-works" className="hover:text-spark-blue transition">How It Works</a>
            <a href="#pricing" className="hover:text-spark-pink transition">Pricing</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-spark-purple via-spark-blue to-spark-pink bg-clip-text text-transparent animate-pulse">
            Never Run Out of Ideas
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Generate personalized, trending content ideas for YouTube, TikTok, Instagram, and Twitch.
            Built for creators who want to stay ahead of the curve.
          </p>

          {/* Waitlist Form */}
          <form onSubmit={handleWaitlist} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto mb-12">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 focus:border-spark-purple focus:outline-none"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-spark-purple to-spark-blue rounded-lg font-semibold hover:scale-105 transition transform"
            >
              Join Waitlist
            </button>
          </form>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-spark-purple">15</div>
              <div className="text-gray-400">Ideas/Generation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-spark-blue">4</div>
              <div className="text-gray-400">Platforms</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-spark-pink">∞</div>
              <div className="text-gray-400">Creativity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-spark-purple to-spark-blue bg-clip-text text-transparent">
            Powerful Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-spark-purple/20 to-transparent border border-spark-purple/30 hover:scale-105 transition transform">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-spark-purple">Personalized Ideas</h3>
              <p className="text-gray-300">
                Get content ideas tailored to your niche, platform, and style. No more generic suggestions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-spark-blue/20 to-transparent border border-spark-blue/30 hover:scale-105 transition transform">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-4 text-spark-blue">Trending Topics</h3>
              <p className="text-gray-300">
                Real-time integration with YouTube, TikTok, and Instagram trends. Stay ahead of the algorithm.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-spark-pink/20 to-transparent border border-spark-pink/30 hover:scale-105 transition transform">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold mb-4 text-spark-pink">8 Content Formats</h3>
              <p className="text-gray-300">
                POV/Story, React, Tutorial, Mashup, Series, Collab, Community, and Twist formats.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-spark-green/20 to-transparent border border-spark-green/30 hover:scale-105 transition transform">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-2xl font-bold mb-4 text-spark-green">Content Calendar</h3>
              <p className="text-gray-300">
                Schedule ideas, plan your content pipeline, and never miss a posting deadline.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-spark-purple/20 to-transparent border border-spark-purple/30 hover:scale-105 transition transform">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-4 text-spark-purple">Community</h3>
              <p className="text-gray-300">
                Share ideas, discover content from other creators, and collaborate on projects.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-spark-blue/20 to-transparent border border-spark-blue/30 hover:scale-105 transition transform">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4 text-spark-blue">Analytics</h3>
              <p className="text-gray-300">
                Track which ideas perform best and optimize your content strategy over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-spark-blue to-spark-pink bg-clip-text text-transparent">
            How It Works
          </h2>

          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-spark-purple flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Answer 4 Simple Questions</h3>
                <p className="text-gray-300">
                  Tell us about your platform, niche, content style, and goals. Takes less than a minute.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-spark-blue flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Get 15 Personalized Ideas</h3>
                <p className="text-gray-300">
                  Our AI analyzes current trends and generates ideas specifically for you. Each with popularity scores and hashtags.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-spark-pink flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Save & Schedule</h3>
                <p className="text-gray-300">
                  Save your favorite ideas, add them to your content calendar, and export to your favorite tools.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-spark-green flex items-center justify-center text-2xl font-bold">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Create & Grow</h3>
                <p className="text-gray-300">
                  Focus on creating amazing content. We&apos;ll keep the ideas flowing so you never hit creator&apos;s block.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-spark-pink to-spark-purple bg-clip-text text-transparent">
            Simple Pricing
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free */}
            <div className="p-8 rounded-xl border border-white/20 hover:border-spark-purple/50 transition">
              <h3 className="text-2xl font-bold mb-4">Free</h3>
              <div className="text-4xl font-bold mb-6">$0<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>✓ 15 ideas per day</li>
                <li>✓ 1 platform</li>
                <li>✓ Basic trending data</li>
                <li>✓ Community access</li>
              </ul>
              <button className="w-full py-3 rounded-lg border border-white/30 hover:bg-white/10 transition">
                Get Started
              </button>
            </div>

            {/* Pro */}
            <div className="p-8 rounded-xl border-2 border-spark-purple bg-gradient-to-br from-spark-purple/10 to-transparent transform scale-105">
              <div className="inline-block px-3 py-1 rounded-full bg-spark-purple text-xs font-bold mb-4">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <div className="text-4xl font-bold mb-6">$9<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>✓ Unlimited ideas</li>
                <li>✓ All platforms</li>
                <li>✓ Real-time trends</li>
                <li>✓ Content calendar</li>
                <li>✓ Analytics dashboard</li>
                <li>✓ Export to CSV/iCal</li>
              </ul>
              <button className="w-full py-3 rounded-lg bg-gradient-to-r from-spark-purple to-spark-blue font-semibold hover:scale-105 transition transform">
                Start Free Trial
              </button>
            </div>

            {/* Team */}
            <div className="p-8 rounded-xl border border-white/20 hover:border-spark-blue/50 transition">
              <h3 className="text-2xl font-bold mb-4">Team</h3>
              <div className="text-4xl font-bold mb-6">$29<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>✓ Everything in Pro</li>
                <li>✓ 5 team members</li>
                <li>✓ Collaboration tools</li>
                <li>✓ Priority support</li>
                <li>✓ Custom integrations</li>
              </ul>
              <button className="w-full py-3 rounded-lg border border-white/30 hover:bg-white/10 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-spark-purple via-spark-blue to-spark-pink bg-clip-text text-transparent">
            Ready to Spark Your Creativity?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators who never run out of content ideas.
          </p>
          <button className="px-12 py-5 bg-gradient-to-r from-spark-purple to-spark-blue rounded-lg text-xl font-semibold hover:scale-105 transition transform">
            Get Started Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold bg-gradient-to-r from-spark-purple to-spark-pink bg-clip-text text-transparent">
            ✨ Spark
          </div>
          <div className="flex gap-8 text-gray-400">
            <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition">Terms of Service</a>
            <a href="mailto:support@spark-app.com" className="hover:text-white transition">Contact</a>
          </div>
          <div className="text-gray-400">
            © 2025 Spark. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
