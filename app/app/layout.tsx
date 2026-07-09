"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { AuthProvider, useAuth } from "@/lib/auth-context";

function AppShell({ children }: { children: React.ReactNode }) {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const isGuest = typeof window !== "undefined" && sessionStorage.getItem("spark_guest") === "true";

  useEffect(() => {
    if (!loading && !user && !isGuest) {
      router.replace("/login");
    }
  }, [user, loading, isGuest, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#0f0e17" }}>
        <div
          className="text-5xl animate-pulse"
          style={{ color: "#ff9500", filter: "drop-shadow(0 0 20px rgba(255,149,0,0.6))" }}
        >
          ⚡
        </div>
      </div>
    );
  }

  const tabs = [
    { href: "/app/dashboard", label: "Ideas", icon: "💡" },
    { href: "/app/profile", label: "Profile", icon: "👤" },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0f0e17" }}>
      {/* Top bar */}
      <header
        className="sticky top-0 z-50 border-b px-5 py-3 flex items-center justify-between"
        style={{ background: "rgba(15,14,23,0.9)", backdropFilter: "blur(12px)", borderColor: "#2a2535" }}
      >
        <Link href="/app/dashboard" className="text-xl font-black" style={{ color: "#ff9500" }}>
          ⚡ Spark
        </Link>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt={user.displayName || "User"}
                  className="w-8 h-8 rounded-full border-2"
                  style={{ borderColor: "#ff9500" }}
                />
              )}
              <button
                onClick={logout}
                className="text-xs transition"
                style={{ color: "#9e9889" }}
              >
                Sign out
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="text-xs px-4 py-2 rounded-full font-bold transition hover:scale-105"
              style={{ background: "#ff9500", color: "#0f0e17" }}
            >
              Sign In
            </Link>
          )}
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-2xl w-full mx-auto px-4 pb-24 pt-6">
        {children}
      </main>

      {/* Bottom tab bar */}
      <nav
        className="fixed bottom-0 left-0 right-0 border-t z-50"
        style={{ background: "rgba(22,21,31,0.96)", backdropFilter: "blur(12px)", borderColor: "#2a2535" }}
      >
        <div className="max-w-2xl mx-auto flex">
          {tabs.map((tab) => {
            const active = pathname === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className="flex-1 flex flex-col items-center py-3 gap-1 transition"
              >
                <span className="text-xl" style={{ opacity: active ? 1 : 0.4 }}>{tab.icon}</span>
                <span
                  className="text-xs font-semibold"
                  style={{ color: active ? "#ff9500" : "#5a5462" }}
                >
                  {tab.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <AppShell>{children}</AppShell>
    </AuthProvider>
  );
}
