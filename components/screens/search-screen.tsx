"use client"

import type { ContentItem } from "@/app/page"
import { useState } from "react"
import { Search, X, TrendingUp, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ContentCard } from "@/components/content-card"
import { cn } from "@/lib/utils"

interface SearchScreenProps {
  onContentSelect: (content: ContentItem) => void
}

const trendingSearches = ["Baldur's Gate 3", "Дюна 2", "Notion", "ChatGPT", "Сёгун сериал"]

const recentSearches = ["Игры для PS5", "Лучшие фильмы 2024", "Продуктивность приложения"]

const searchResults: ContentItem[] = [
  {
    id: "1",
    title: "Notion",
    type: "app",
    rating: 4.8,
    reviewCount: 12453,
    image: "/notion-app-icon-minimalist.jpg",
    description: "Всё-в-одном рабочее пространство",
    tags: ["Продуктивность"],
    platform: ["iOS", "Android"],
  },
  {
    id: "2",
    title: "Obsidian",
    type: "app",
    rating: 4.7,
    reviewCount: 8932,
    image: "/obsidian-app-icon-purple-gem.jpg",
    description: "Приватные заметки с Markdown",
    tags: ["Заметки"],
    platform: ["iOS", "Android"],
  },
]

export function SearchScreen({ onContentSelect }: SearchScreenProps) {
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const showResults = query.length > 0

  return (
    <div className="px-4 sm:px-5 md:px-6 lg:px-8 pb-4">
      {/* Header */}
      <div className="py-4 md:py-6">
        <h1 className="text-xl md:text-2xl font-bold text-foreground">Поиск</h1>
        <p className="text-xs md:text-sm text-muted-foreground mt-1">
          Найдите приложения, игры, фильмы, сериалы и сайты
        </p>
      </div>

      {/* Search Input */}
      <div className="relative mt-2 w-full md:max-w-2xl">
        <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Поиск контента..."
          className={cn(
            "pl-11 md:pl-12 pr-10 h-12 md:h-12 rounded-xl bg-secondary border-border text-foreground placeholder:text-muted-foreground text-base",
            isFocused && "ring-2 ring-[#3A86FF] border-[#3A86FF]",
          )}
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-muted"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        )}
      </div>

      {/* Content */}
      {showResults ? (
        <div className="mt-6">
          <h2 className="text-sm md:text-base font-semibold text-foreground mb-3">Результаты</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {searchResults.map((content) => (
              <ContentCard key={content.id} content={content} onClick={() => onContentSelect(content)} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row md:gap-12 md:mt-8">
          {/* Trending */}
          <div className="mt-5 md:mt-0 md:flex-1">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-[#3A86FF]" />
              <h2 className="text-sm md:text-base font-semibold text-foreground">В тренде</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {trendingSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3 md:px-4 py-2 md:py-2 rounded-full bg-secondary text-xs md:text-sm text-foreground hover:bg-[#3A86FF]/20 hover:text-[#3A86FF] active:scale-95 transition-all min-h-[44px] flex items-center"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          {/* Recent */}
          <div className="mt-5 md:mt-0 md:flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <h2 className="text-sm md:text-base font-semibold text-foreground">Недавние</h2>
            </div>
            <div className="space-y-1">
              {recentSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="flex items-center gap-3 w-full p-3 md:p-3 rounded-lg hover:bg-secondary active:bg-secondary/80 transition-colors text-left min-h-[44px]"
                >
                  <Clock className="w-4 h-4 text-muted-foreground shrink-0" />
                  <span className="text-sm md:text-base text-foreground">{term}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
