"use client"

import type { ContentItem } from "@/app/page"
import { ContentCard } from "@/components/content-card"
import { CategoryFilter } from "@/components/category-filter"
import { useState } from "react"
import { Bell, Sparkles } from "lucide-react"

interface HomeScreenProps {
  onContentSelect: (content: ContentItem) => void
}

const mockContent: ContentItem[] = [
  {
    id: "1",
    title: "Notion",
    type: "app",
    rating: 4.8,
    reviewCount: 12453,
    image: "/notion-app-icon-minimalist.jpg",
    description: "Всё-в-одном рабочее пространство для заметок, задач и баз данных",
    tags: ["Продуктивность", "Заметки", "Организация"],
    platform: ["iOS", "Android", "Web"],
  },
  {
    id: "2",
    title: "Baldur's Gate 3",
    type: "game",
    rating: 4.9,
    reviewCount: 89234,
    image: "/baldurs-gate-3-game-cover-dark-fantasy.jpg",
    description: "Эпическая RPG от создателей Divinity: Original Sin",
    tags: ["RPG", "Фэнтези", "Пошаговая"],
    year: 2023,
    platform: ["PC", "PS5", "Xbox"],
  },
  {
    id: "3",
    title: "Дюна: Часть вторая",
    type: "movie",
    rating: 4.7,
    reviewCount: 45678,
    image: "/dune-part-two-movie-poster-sci-fi-desert.jpg",
    description: "Продолжение эпической саги о Поле Атрейдесе",
    tags: ["Фантастика", "Драма", "Приключения"],
    year: 2024,
  },
  {
    id: "4",
    title: "Сёгун",
    type: "series",
    rating: 4.9,
    reviewCount: 23456,
    image: "/shogun-series-poster-samurai-japan.jpg",
    description: "Историческая драма о первых контактах Японии с Западом",
    tags: ["Драма", "История", "Япония"],
    year: 2024,
  },
  {
    id: "5",
    title: "Behance",
    type: "website",
    rating: 4.5,
    reviewCount: 8934,
    image: "/behance-website-logo-creative-portfolio.jpg",
    description: "Платформа для творческих портфолио и вдохновения",
    tags: ["Дизайн", "Портфолио", "Творчество"],
  },
]

export function HomeScreen({ onContentSelect }: HomeScreenProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const filteredContent =
    activeCategory === "all" ? mockContent : mockContent.filter((item) => item.type === activeCategory)

  return (
    <div className="px-4 sm:px-5 md:px-6 lg:px-8 pb-4">
      {/* Header - hide logo on desktop since it's in sidebar */}
      <div className="flex items-center justify-between py-4 md:py-6">
        <div className="flex items-center gap-3 md:hidden">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3A86FF] to-[#8338EC] flex items-center justify-center">
            <span className="text-white font-bold text-lg">Р</span>
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">РЕЙТИ</p>
            <p className="text-[10px] text-muted-foreground">Цифровой мир — в фокусе</p>
          </div>
        </div>
        <h1 className="hidden md:block text-2xl font-bold text-foreground">Главная</h1>
        <button className="relative p-2.5 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
          <Bell className="w-5 h-5 text-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full" />
        </button>
      </div>

      {/* AI Recommendation Banner */}
      <div className="mt-2 p-4 md:p-6 rounded-2xl bg-gradient-to-r from-[#3A86FF]/15 to-[#8338EC]/15 border border-[#3A86FF]/30">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-[#3A86FF]/20 shrink-0">
            <Sparkles className="w-5 h-5 text-[#3A86FF]" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm md:text-base font-semibold text-foreground">ИИ-рекомендация дня</h3>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">
              На основе ваших интересов: попробуйте новую игру Baldur&apos;s Gate 3
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <CategoryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      {/* Section Title */}
      <div className="flex items-center justify-between mt-6 mb-4">
        <h2 className="text-lg md:text-xl font-bold text-foreground">Популярное</h2>
        <button className="text-xs md:text-sm text-[#3A86FF] font-medium hover:underline px-2 py-1">Все</button>
      </div>

      {/* Content Grid - Improved responsive grid with better breakpoints */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
        {filteredContent.map((content) => (
          <ContentCard key={content.id} content={content} onClick={() => onContentSelect(content)} />
        ))}
      </div>
    </div>
  )
}
