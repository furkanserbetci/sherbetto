"use client";

import { categories } from "@/data/products";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-10">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 ${
            selectedCategory === category.id
              ? "bg-[var(--accent)] text-white shadow-lg"
              : "bg-white text-[var(--foreground)] hover:bg-gray-100 shadow-md"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
