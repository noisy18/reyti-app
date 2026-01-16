"use client"

import { Clock, Star, Trash2, Calendar } from "lucide-react"
import type { ContentItem } from "@/app/page"
import { getAssetPath } from "@/lib/get-asset-path"

interface HistoryItem extends ContentItem {
  viewedAt: string
  viewedDate: string
}

const historyData: { date: string; items: HistoryItem[] }[] = [
  {
    date: "Сегодня",
    items: [
      {
        id: "1",
        title: "Baldur's Gate 3",
        type: "game",
        rating: 4.9,
        reviewCount: 156789,
        image: "/baldurs-gate-3-game.jpg",
        description: "Эпическая RPG от Larian Studios",
        tags: ["RPG"],
        viewedAt: "14:32",
        viewedDate: "Сегодня",
      },
      {
        id: "2",
        title: "Notion",
        type: "app",
        rating: 4.8,
        reviewCount: 45678,
        image: "/notion-app-icon.png",
        description: "Всё для организации работы",
        tags: ["Продуктивность"],
        viewedAt: "12:15",
        viewedDate: "Сегодня",
      },
    ],
  },
  {
    date: "Вчера",
    items: [
      {
        id: "3",
        title: "Оппенгеймер",
        type: "movie",
        rating: 4.8,
        reviewCount: 98234,
        image: "/oppenheimer-movie.jpg",
        description: "Биографическая драма Нолана",
        tags: ["Биография"],
        viewedAt: "21:45",
        viewedDate: "Вчера",
      },
      {
        id: "4",
        title: "Figma",
        type: "app",
        rating: 4.9,
        reviewCount: 34567,
        image: "/figma-design-icon.jpg",
        description: "Инструмент для дизайна",
        tags: ["Дизайн"],
        viewedAt: "18:20",
        viewedDate: "Вчера",
      },
      {
        id: "5",
        title: "Сёгун",
        type: "series",
        rating: 4.9,
        reviewCount: 67890,
        image: "/shogun-series-2024.jpg",
        description: "Историческая драма",
        tags: ["Драма"],
        viewedAt: "15:00",
        viewedDate: "Вчера",
      },
    ],
  },
  {
    date: "На этой неделе",
    items: [
      {
        id: "6",
        title: "Elden Ring",
        type: "game",
        rating: 4.9,
        reviewCount: 234567,
        image: "/elden-ring-inspired-landscape.png",
        description: "Шедевр от FromSoftware",
        tags: ["Action RPG"],
        viewedAt: "10 янв",
        viewedDate: "На этой неделе",
      },
      {
        id: "7",
        title: "Spotify",
        type: "app",
        rating: 4.7,
        reviewCount: 89012,
        image: "/spotify-green-icon.jpg",
        description: "Музыкальный стриминг",
        tags: ["Музыка"],
        viewedAt: "9 янв",
        viewedDate: "На этой неделе",
      },
    ],
  },
]

export function HistoryScreen({
  onBack,
  onContentSelect,
}: {
  onBack: () => void
  onContentSelect: (content: ContentItem) => void
}) {
  const totalItems = historyData.reduce((acc, group) => acc + group.items.length, 0)

  const getTypeLabel = (type: HistoryItem["type"]) => {
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
          <button onClick={onBack} className="text-[#3A86FF] text-sm font-medium">
            ← Назад
          </button>
          <h1 className="text-lg font-bold text-foreground">История</h1>
          <button className="text-[#FF006E] text-sm font-medium">Очистить</button>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 py-4">
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#8338EC]/10 to-[#3A86FF]/10 border border-[#8338EC]/20">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#8338EC] to-[#3A86FF] flex items-center justify-center">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">{totalItems}</p>
            <p className="text-xs text-muted-foreground">просмотрено</p>
          </div>
          <div className="ml-auto">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground transition-colors">
              <Calendar className="w-4 h-4" />
              <span className="text-xs font-medium">Фильтр</span>
            </button>
          </div>
        </div>
      </div>

      {/* History Groups */}
      <div className="px-4 space-y-5">
        {historyData.map((group) => (
          <div key={group.date}>
            <h2 className="text-sm font-semibold text-muted-foreground mb-3">{group.date}</h2>
            <div className="space-y-2">
              {group.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onContentSelect(item)}
                  className="flex items-center gap-3 w-full p-3 rounded-2xl bg-card border border-border shadow-sm text-left hover:bg-secondary transition-colors"
                >
                  <img
                    src={getAssetPath(item.image || "/placeholder.svg")}
                    alt={item.title}
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-foreground truncate">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{getTypeLabel(item.type)}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-[#FFD60A] fill-[#FFD60A]" />
                        <span className="text-xs text-foreground font-medium">{item.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">• {item.viewedAt}</span>
                    </div>
                  </div>
                  <button className="p-2 rounded-lg hover:bg-destructive/10 transition-colors">
                    <Trash2 className="w-4 h-4 text-muted-foreground hover:text-destructive" />
                  </button>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
