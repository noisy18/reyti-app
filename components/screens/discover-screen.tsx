"use client"

import type { ContentItem } from "@/app/page"
import { Star, TrendingUp, Sparkles, Award } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useRef } from "react"
import { getAssetPath } from "@/lib/get-asset-path"

interface DiscoverScreenProps {
  onContentSelect: (content: ContentItem) => void
}

const categories = [
  { id: "trending", label: "Тренды" },
  { id: "top", label: "Топ" },
  { id: "new", label: "Новинки" },
  { id: "awards", label: "Награды" },
]

const collections = [
  {
    id: "1",
    title: "Лучшие игры 2024",
    image: "/best-games-2024-collection.jpg",
    count: 24,
  },
  {
    id: "2",
    title: "Топ фильмов года",
    image: "/top-movies-2024-cinema.jpg",
    count: 18,
  },
  {
    id: "3",
    title: "Must-have приложения",
    image: "/must-have-apps-productivity.jpg",
    count: 32,
  },
]

const trendingContent: ContentItem[] = [
  {
    id: "t1",
    title: "GTA VI",
    type: "game",
    rating: 4.9,
    reviewCount: 89234,
    image: "/gta-6-game-cover.jpg",
    description: "Самая ожидаемая игра года",
    tags: ["Action", "Open World"],
    year: 2025,
  },
  {
    id: "t2",
    title: "ChatGPT",
    type: "app",
    rating: 4.7,
    reviewCount: 156789,
    image: "/chatgpt-ai-app-icon.jpg",
    description: "Революция в ИИ-ассистентах",
    tags: ["AI", "Продуктивность"],
    platform: ["iOS", "Android", "Web"],
  },
  {
    id: "t3",
    title: "Дэдпул и Росомаха",
    type: "movie",
    rating: 4.6,
    reviewCount: 78456,
    image: "/deadpool-wolverine-movie-poster.png",
    description: "Взрывной дуэт Marvel",
    tags: ["Боевик", "Комедия"],
    year: 2024,
  },
]

const topContent: ContentItem[] = [
  {
    id: "top1",
    title: "Baldur's Gate 3",
    type: "game",
    rating: 4.9,
    reviewCount: 256789,
    image: "/baldurs-gate-3-rpg.jpg",
    description: "Игра года по версии всех изданий",
    tags: ["RPG", "Фэнтези"],
    year: 2023,
  },
  {
    id: "top2",
    title: "Оппенгеймер",
    type: "movie",
    rating: 4.8,
    reviewCount: 198234,
    image: "/oppenheimer-nolan-movie.jpg",
    description: "Оскар за лучший фильм",
    tags: ["Оскар", "Драма"],
    year: 2023,
  },
  {
    id: "top3",
    title: "Notion",
    type: "app",
    rating: 4.8,
    reviewCount: 145678,
    image: "/notion-productivity-app.jpg",
    description: "Лучший инструмент для заметок",
    tags: ["Продуктивность"],
    platform: ["Web", "Desktop", "Mobile"],
  },
]

const newContent: ContentItem[] = [
  {
    id: "n1",
    title: "Сто лет одиночества",
    type: "series",
    rating: 4.7,
    reviewCount: 23456,
    image: "/placeholder.svg?height=64&width=64",
    description: "Экранизация культового романа",
    tags: ["Драма", "Магический реализм"],
    year: 2024,
  },
  {
    id: "n2",
    title: "Arc Browser",
    type: "app",
    rating: 4.6,
    reviewCount: 34567,
    image: "/placeholder.svg?height=64&width=64",
    description: "Переосмысление веб-браузера",
    tags: ["Браузер", "Продуктивность"],
    platform: ["macOS", "Windows"],
  },
  {
    id: "n3",
    title: "S.T.A.L.K.E.R. 2",
    type: "game",
    rating: 4.5,
    reviewCount: 45678,
    image: "/placeholder.svg?height=64&width=64",
    description: "Долгожданное продолжение",
    tags: ["Шутер", "Выживание"],
    year: 2024,
  },
]

const awardsContent: ContentItem[] = [
  {
    id: "a1",
    title: "Baldur's Gate 3",
    type: "game",
    rating: 4.9,
    reviewCount: 256789,
    image: "/placeholder.svg?height=64&width=64",
    description: "Game of the Year 2023",
    tags: ["GOTY", "RPG"],
    year: 2023,
  },
  {
    id: "a2",
    title: "Оппенгеймер",
    type: "movie",
    rating: 4.8,
    reviewCount: 198234,
    image: "/placeholder.svg?height=64&width=64",
    description: "7 премий Оскар",
    tags: ["Оскар", "Драма"],
    year: 2023,
  },
  {
    id: "a3",
    title: "Сёгун",
    type: "series",
    rating: 4.9,
    reviewCount: 87654,
    image: "/placeholder.svg?height=64&width=64",
    description: "18 премий Эмми",
    tags: ["Эмми", "Исторический"],
    year: 2024,
  },
]

export function DiscoverScreen({ onContentSelect }: DiscoverScreenProps) {
  const [activeCategory, setActiveCategory] = useState("trending")
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const getActiveContent = () => {
    switch (activeCategory) {
      case "trending":
        return trendingContent
      case "top":
        return topContent
      case "new":
        return newContent
      case "awards":
        return awardsContent
      default:
        return trendingContent
    }
  }

  const getSectionTitle = () => {
    switch (activeCategory) {
      case "trending":
        return "Сейчас в тренде"
      case "top":
        return "Лучшие по рейтингу"
      case "new":
        return "Свежие релизы"
      case "awards":
        return "Победители наград"
      default:
        return "Рекомендуем"
    }
  }

  const getSectionIcon = () => {
    switch (activeCategory) {
      case "trending":
        return <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-[#FF006E]" />
      case "top":
        return <Star className="w-4 h-4 md:w-5 md:h-5 text-[#FFD60A]" />
      case "new":
        return <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#3A86FF]" />
      case "awards":
        return <Award className="w-4 h-4 md:w-5 md:h-5 text-[#8338EC]" />
      default:
        return null
    }
  }

  return (
    <div className="pb-4">
      {/* Header */}
      <div className="px-4 sm:px-5 md:px-6 lg:px-8 py-4 md:py-6">
        <h1 className="text-xl md:text-2xl font-bold text-foreground">Обзор</h1>
        <p className="text-xs md:text-sm text-muted-foreground mt-1">Откройте для себя лучший контент</p>
      </div>

      <div className="relative px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="absolute left-0 top-0 bottom-2 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none sm:hidden" />
        <div className="absolute right-0 top-0 bottom-2 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none sm:hidden" />

        <div
          ref={scrollContainerRef}
          className="flex gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-hide scroll-smooth snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {categories.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={cn(
                "px-4 md:px-5 py-2.5 md:py-2.5 rounded-xl whitespace-nowrap transition-all min-h-[44px] snap-start shrink-0",
                activeCategory === id
                  ? "bg-gradient-to-r from-[#3A86FF] to-[#8338EC] text-white"
                  : "bg-secondary text-muted-foreground hover:text-foreground active:bg-secondary/80",
              )}
            >
              <span className="text-sm font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Collections */}
      <div className="mt-6 px-4 sm:px-5 md:px-6 lg:px-8">
        <h2 className="text-sm md:text-base font-semibold text-foreground mb-3">Подборки</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="relative h-36 sm:h-40 rounded-2xl overflow-hidden group cursor-pointer active:scale-[0.98] transition-transform"
            >
              <img
                src={getAssetPath(collection.image || "/placeholder.svg")}
                alt={collection.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4">
                <h3 className="text-sm md:text-base font-semibold text-white">{collection.title}</h3>
                <p className="text-xs md:text-sm text-white/70">{collection.count} элементов</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Content Section */}
      <div className="mt-6 px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-4">
          {getSectionIcon()}
          <h2 className="text-sm md:text-base font-semibold text-foreground">{getSectionTitle()}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {getActiveContent().map((content, index) => (
            <button
              key={content.id}
              onClick={() => onContentSelect(content)}
              className="flex items-center gap-3 md:gap-4 w-full p-3 md:p-4 rounded-xl bg-card border border-border hover:bg-secondary active:scale-[0.98] transition-all text-left shadow-sm"
            >
              {activeCategory === "top" && (
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-[#FFD60A] to-[#F59E0B] flex items-center justify-center shrink-0">
                  <span className="text-xs md:text-sm font-bold text-white">{index + 1}</span>
                </div>
              )}
              <img
                src={getAssetPath(content.image || "/placeholder.svg")}
                alt={content.title}
                className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-xl object-cover shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm md:text-base font-semibold text-foreground truncate">{content.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground mt-0.5 line-clamp-2">{content.description}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#FFD60A] fill-[#FFD60A]" />
                    <span className="text-xs md:text-sm text-foreground font-medium">{content.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs md:text-sm text-muted-foreground capitalize">
                    {content.type === "app"
                      ? "Приложение"
                      : content.type === "game"
                        ? "Игра"
                        : content.type === "movie"
                          ? "Фильм"
                          : content.type === "series"
                            ? "Сериал"
                            : "Сайт"}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
