"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { generateIdeas, Answers } from "@/lib/ideas";

const questions = [
  {
    id: "platform",
    question: "What platform do you create content for?",
    options: ["TikTok", "YouTube", "Instagram", "Twitch", "Multiple Platforms"],
  },
  {
    id: "niche",
    question: "What is your content niche?",
    options: ["Gaming", "Lifestyle", "Education", "Comedy", "Tech", "Beauty", "Fitness", "Other"],
  },
  {
    id: "style",
    question: "What is your content style?",
    options: ["Energetic & Fast-paced", "Calm & Informative", "Funny & Entertaining", "Inspirational", "Storytelling"],
  },
  {
    id: "goal",
    question: "What is your main goal?",
    options: ["Grow followers", "Increase engagement", "Build community", "Make money", "Express creativity"],
  },
];

export default function QuestionnairePage() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const question = questions[current];
  const selected = (answers[question.id as keyof Answers] as string[]) || [];
  const progress = ((current + 1) / questions.length) * 100;
  const canProceed = selected.length > 0;

  const toggle = (option: string) => {
    const key = question.id as keyof Answers;
    const current = (answers[key] as string[]) || [];
    const updated = current.includes(option)
      ? current.filter((o) => o !== option)
      : [...current, option];
    setAnswers({ ...answers, [key]: updated });
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      const ideas = generateIdeas(answers);
      if (typeof window !== "undefined") {
        localStorage.setItem("spark_answers", JSON.stringify(answers));
        localStorage.setItem("spark_ideas", JSON.stringify(ideas));
      }
      router.push("/app/dashboard");
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div
          className="h-1.5 rounded-full overflow-hidden mb-4"
          style={{ background: "#1e1c2e" }}
        >
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, background: "#ff9500", boxShadow: "0 0 8px rgba(255,149,0,0.5)" }}
          />
        </div>
        <p className="text-xs text-center" style={{ color: "#9e9889" }}>
          Step {current + 1} of {questions.length}
        </p>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-center mb-2" style={{ color: "#f5f0e8" }}>
          {question.question}
        </h1>
        <p className="text-sm text-center" style={{ color: "#9e9889" }}>
          Select all that apply
        </p>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-8">
        {question.options.map((option) => {
          const isSelected = selected.includes(option);
          return (
            <button
              key={option}
              onClick={() => toggle(option)}
              className="w-full p-4 rounded-2xl text-left font-medium text-base border-2 transition hover:scale-[1.01]"
              style={{
                background: isSelected ? "rgba(255,149,0,0.1)" : "#16151f",
                borderColor: isSelected ? "#ff9500" : "#2a2535",
                color: isSelected ? "#ff9500" : "#f5f0e8",
              }}
            >
              <span className="mr-2">{isSelected ? "✓" : "○"}</span>
              {option}
            </button>
          );
        })}
      </div>

      {/* Next / Finish */}
      <button
        onClick={handleNext}
        disabled={!canProceed}
        className="w-full py-4 rounded-2xl font-bold text-base transition hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100"
        style={{
          background: canProceed ? "#ff9500" : "#1e1c2e",
          color: canProceed ? "#0f0e17" : "#5a5462",
          boxShadow: canProceed ? "0 4px 20px rgba(255,149,0,0.35)" : "none",
        }}
      >
        {current < questions.length - 1 ? "Next →" : "Generate My Ideas ⚡"}
      </button>
    </div>
  );
}
