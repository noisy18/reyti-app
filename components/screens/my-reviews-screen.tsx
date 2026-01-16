"use client"

import { Star, MoreHorizontal, ThumbsUp, MessageCircle } from "lucide-react"
import { useState } from "react"
import { getAssetPath } from "@/lib/get-asset-path"

interface Review {
  id: string
  contentTitle: string
  contentType: "app" | "game" | "movie" | "series" | "website"
  contentImage: string
  rating: number
  text: string
  date: string
  likes: number
  comments: number
}

const myReviews: Review[] = [
  {
    id: "1",
    contentTitle: "Baldur's Gate 3",
    contentType: "game",
    contentImage: "/baldurs-gate-3-game.jpg",
    rating: 5,
    text: "Лучшая RPG за последние годы! Невероятная свобода выбора и глубина истории. Каждое прохождение уникально.",
    date: "15 янв 2025",
    likes: 24,
    comments: 5,
  },
  {
    id: "2",
    contentTitle: "Notion",
    contentType: "app",
    contentImage: "/notion-app-icon.png",
    rating: 4,
    text: "Отличный инструмент для организации работы и заметок. Немного сложно разобраться вначале, но потом не можешь без него жить.",
    date: "12 янв 2025",
    likes: 18,
    comments: 3,
  },
  {
    id: "3",
    contentTitle: "Дюна: Часть вторая",
    contentType: "movie",
    contentImage: "/dune-part-two-poster.png",
    rating: 5,
    text: "Визуальный шедевр! Вильнёв превзошёл сам себя. Масштаб, музыка, актёрская игра — всё на высшем уровне.",
    date: "8 янв 2025",
    likes: 45,
    comments: 12,
  },
  {
    id: "4",
    contentTitle: "Spotify",
    contentType: "app",
    contentImage: "/spotify-app-icon-green.jpg",
    rating: 4,
    text: "Отличные рекомендации и удобный интерфейс. Иногда бывают проблемы с синхронизацией плейлистов между устройствами.",
    date: "5 янв 2025",
    likes: 12,
    comments: 2,
  },
]

const filterOptions = ["Все", "Игры", "Приложения", "Фильмы", "Сериалы", "Сайты"]

export function MyReviewsScreen({ onBack }: { onBack: () => void }) {
  const [activeFilter, setActiveFilter] = useState("Все")

  const getTypeLabel = (type: Review["contentType"]) => {
    const labels = {
      app: "Приложение",
      game: "Игра",
      movie: "Фильм",
      series: "Сериал",
      website: "Сайт",
    }
    return labels[type]
  }

  return (
    <div className="pb-4">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm z-10 px-4 py-3 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="text-[#3A86FF] text-sm font-medium">
              ← Назад
            </button>
          </div>
          <h1 className="text-lg font-bold text-foreground">Мои отзывы</h1>
          <div className="w-16" />
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 py-4">
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#3A86FF]/10 to-[#8338EC]/10 border border-[#3A86FF]/20">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#3A86FF] to-[#8338EC] flex items-center justify-center">
            <Star className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">{myReviews.length}</p>
            <p className="text-xs text-muted-foreground">отзывов написано</p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-lg font-semibold text-foreground">{myReviews.reduce((acc, r) => acc + r.likes, 0)}</p>
            <p className="text-xs text-muted-foreground">лайков получено</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 pb-3">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-[#3A86FF] to-[#8338EC] text-white"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Reviews List */}
      <div className="px-4 space-y-3">
        {myReviews.map((review) => (
          <div key={review.id} className="p-4 rounded-2xl bg-card border border-border shadow-sm">
            {/* Content Info */}
            <div className="flex items-start gap-3">
              <img
                src={getAssetPath(review.contentImage || "/placeholder.svg")}
                alt={review.contentTitle}
                className="w-14 h-14 rounded-xl object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{review.contentTitle}</h3>
                    <p className="text-xs text-muted-foreground">{getTypeLabel(review.contentType)}</p>
                  </div>
                  <button className="p-1 rounded-lg hover:bg-secondary transition-colors">
                    <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
                {/* Rating */}
                <div className="flex items-center gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-3.5 h-3.5 ${
                        star <= review.rating ? "text-[#FFD60A] fill-[#FFD60A]" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Review Text */}
            <p className="mt-3 text-sm text-foreground leading-relaxed">{review.text}</p>

            {/* Footer */}
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
              <span className="text-xs text-muted-foreground">{review.date}</span>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1.5 text-muted-foreground hover:text-[#3A86FF] transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-xs">{review.likes}</span>
                </button>
                <button className="flex items-center gap-1.5 text-muted-foreground hover:text-[#3A86FF] transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-xs">{review.comments}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
