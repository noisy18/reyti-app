"use client"

import { cn } from "@/lib/utils"

interface CategoryFilterProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

const categories = [
  { id: "all", label: "Все" },
  { id: "app", label: "Приложения" },
  { id: "game", label: "Игры" },
  { id: "movie", label: "Фильмы" },
  { id: "series", label: "Сериалы" },
  { id: "website", label: "Сайты" },
]

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="relative -mx-4 sm:-mx-5 md:-mx-6 lg:-mx-8">
      {/* Gradient fade indicators for scroll */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-2 md:gap-3 mt-4 md:mt-6 overflow-x-auto pb-2 px-4 sm:px-5 md:px-6 lg:px-8 scrollbar-hide scroll-smooth snap-x snap-mandatory"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {categories.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => onCategoryChange(id)}
            className={cn(
              "flex-shrink-0 snap-start px-4 py-2.5 rounded-xl whitespace-nowrap transition-all text-sm font-medium min-h-[44px] min-w-[44px]",
              activeCategory === id
                ? "bg-gradient-to-r from-[#3A86FF] to-[#8338EC] text-white shadow-lg shadow-[#3A86FF]/25"
                : "bg-secondary text-muted-foreground hover:text-foreground active:scale-95 active:bg-secondary/80",
            )}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
