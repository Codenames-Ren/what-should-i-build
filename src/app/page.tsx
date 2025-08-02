"use client";

import { useState } from "react";
import CategorySelector from "@/components/CategorySelector";
import IdeaCard from "@/components/IdeaCard";
import { categories } from "@/lib/data";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentIdea, setCurrentIdea] = useState("");

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    randomizeIdea(category);
  };

  const randomizeIdea = (category: string) => {
    const found = categories.find((c) => c.name === category);
    if (found) {
      const random =
        found.ideas[Math.floor(Math.random() * found.ideas.length)];
      setCurrentIdea(random);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">What should i build?</h1>
      <CategorySelector
        categories={categories.map((c) => c.name)}
        onSelect={handleCategorySelect}
      />
      {currentIdea && (
        <>
          <IdeaCard idea={currentIdea} />
          <button
            onClick={() => randomizeIdea(selectedCategory)}
            className="mt-4 px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition"
          >
            🎲 Randomize Again
          </button>
        </>
      )}
    </main>
  );
}
