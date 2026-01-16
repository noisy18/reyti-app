"use client"

import { Heart, Star, Grid, List } from "lucide-react"
import { useState } from "react"
import type { ContentItem } from "@/app/page"
import { getAssetPath } from "@/lib/get-asset-path"

interface FavoriteItem extends ContentItem {
  addedDate: string
  category: string
}

const favorites: FavoriteItem[] = [
  {
    id: "1",
    title: "Baldur's Gate 3",
    type: "game",
    rating: 4.9,
    reviewCount: 156789,
    image: "/baldurs-gate-3-rpg-game.jpg",
    description: "Эпическая RPG от Larian Studios",
    tags: ["RPG", "Фэнтези"],
    year: 2023,
    addedDate: "15 янв 2025",
    category: "Игры",
  },
  {
    id: "2",
    title: "Notion",
    type: "app",
    rating: 4.8,
    reviewCount: 45678,
    image: "/notion-app-productivity.jpg",
    description: "Всё для организации работы",
    tags: ["Продуктивность"],
    platform: ["iOS", "Android", "Web"],
    addedDate: "12 янв 2025",
    category: "Приложения",
  },
  {
    id: "3",
    title: "Оппенгеймер",
    type: "movie",
    rating: 4.8,
    reviewCount: 98234,
    image: "/images/posters/oppenheimer-poster.png",
    description: "Биографическая драма Кристофера Нолана",
    tags: ["Биография", "Драма"],
    year: 2023,
    addedDate: "10 янв 2025",
    category: "Фильмы",
  },
  {
    id: "4",
    title: "Сёгун",
    type: "series",
    rating: 4.9,
    reviewCount: 67890,
    image: "/shogun-tv-series-2024.jpg",
    description: "Историческая драма о феодальной Японии",
    tags: ["Драма", "Исторический"],
    year: 2024,
    addedDate: "8 янв 2025",
    category: "Сериалы",
  },
  {
    id: "5",
    title: "Figma",
    type: "app",
    rating: 4.9,
    reviewCount: 34567,
    image: "/figma-design-tool-icon.jpg",
    description: "Инструмент для дизайна интерфейсов",
    tags: ["Дизайн"],
    platform: ["Web", "Desktop"],
    addedDate: "5 янв 2025",
    category: "Приложения",
  },
  {
    id: "6",
    title: "Elden Ring",
    type: "game",
    rating: 4.9,
    reviewCount: 234567,
    image: "/elden-ring-dark-fantasy-game.jpg",
    description: "Шедевр от FromSoftware",
    tags: ["Action RPG", "Souls-like"],
    year: 2022,
    addedDate: "3 янв 2025",
    category: "Игры",
  },
]

const categories = ["Все", "Игры", "Приложения", "Фильмы", "Сериалы", "Сайты"]

export function FavoritesScreen({
  onBack,
  onContentSelect,
}: {
  onBack: () => void
  onContentSelect: (content: ContentItem) => void
}) {
  const [activeCategory, setActiveCategory] = useState("Все")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredFavorites =
    activeCategory === "Все" ? favorites : favorites.filter((f) => f.category === activeCategory)

  return (
    <div className="pb-4">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm z-10 px-4 py-3 border-b border-border">
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="text-[#3A86FF] text-sm font-medium">
            ← Назад
          </button>
          <h1 className="text-lg font-bold text-foreground">Избранное</h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "grid" ? "bg-[#3A86FF] text-white" : "text-muted-foreground hover:bg-secondary"
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "list" ? "bg-[#3A86FF] text-white" : "text-muted-foreground hover:bg-secondary"
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 py-4">
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#FF006E]/10 to-[#8338EC]/10 border border-[#FF006E]/20">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#FF006E] to-[#8338EC] flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">{favorites.length}</p>
            <p className="text-xs text-muted-foreground">в избранном</p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="px-4 pb-3">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-[#3A86FF] to-[#8338EC] text-white"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-4">
        {viewMode === "grid" ? (
          <div className="grid grid-cols-2 gap-3">
            {filteredFavorites.map((item) => (
              <button
                key={item.id}
                onClick={() => onContentSelect(item)}
                className="relative rounded-2xl overflow-hidden bg-card border border-border shadow-sm text-left group"
              >
                <div className="aspect-square relative">
                  <img
                    src={getAssetPath(item.image || "/placeholder.svg")}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/20 backdrop-blur-sm hover:bg-[#FF006E] transition-colors">
                    <Heart className="w-4 h-4 text-white fill-white" />
                  </button>
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-foreground truncate">{item.title}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3 h-3 text-[#FFD60A] fill-[#FFD60A]" />
                    <span className="text-xs text-foreground font-medium">{item.rating}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredFavorites.map((item) => (
              <button
                key={item.id}
                onClick={() => onContentSelect(item)}
                className="flex items-center gap-3 w-full p-3 rounded-2xl bg-card border border-border shadow-sm text-left hover:bg-secondary transition-colors"
              >
                <img
                  src={getAssetPath(item.image || "/placeholder.svg")}
                  alt={item.title}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-foreground truncate">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-[#FFD60A] fill-[#FFD60A]" />
                      <span className="text-xs text-foreground font-medium">{item.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">• {item.addedDate}</span>
                  </div>
                </div>
                <button className="p-2 rounded-lg hover:bg-[#FF006E]/10 transition-colors">
                  <Heart className="w-5 h-5 text-[#FF006E] fill-[#FF006E]" />
                </button>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
