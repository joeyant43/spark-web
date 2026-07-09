"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

export default function AppRoot() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    const hasAnswers =
      typeof window !== "undefined" &&
      !!localStorage.getItem("spark_answers");

    if (hasAnswers) {
      router.replace("/app/dashboard");
    } else {
      router.replace("/app/questionnaire");
    }
  }, [user, loading, router]);

  return null;
}
