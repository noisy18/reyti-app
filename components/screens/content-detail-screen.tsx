"use client"

import type { ContentItem } from "@/app/page"
import { ArrowLeft, Star, Heart, Share2, MessageCircle, ExternalLink, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { getAssetPath } from "@/lib/get-asset-path"

interface ContentDetailScreenProps {
  content: ContentItem
  onBack: () => void
}

const reviews = [
  {
    id: "1",
    author: "Мария",
    avatar: "/woman-avatar-portrait.jpg",
    rating: 5,
    text: "Отличное приложение! Использую каждый день для работы и личных проектов.",
    date: "2 дня назад",
    likes: 24,
  },
  {
    id: "2",
    author: "Дмитрий",
    avatar: "/man-avatar-portrait-young.jpg",
    rating: 4,
    text: "Хорошо, но хотелось бы больше возможностей в бесплатной версии.",
    date: "5 дней назад",
    likes: 12,
  },
]

export function ContentDetailScreen({ content, onBack }: ContentDetailScreenProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [activeTab, setActiveTab] = useState<"about" | "reviews">("about")

  const typeLabel = {
    app: "Приложение",
    game: "Игра",
    movie: "Фильм",
    series: "Сериал",
    website: "Сайт",
  }[content.type]

  return (
    <div className="pb-4 max-w-4xl mx-auto">
      {/* Header Image */}
      <div className="relative h-52 sm:h-64 md:h-72 lg:h-80">
        <img
          src={getAssetPath(content.image || "/placeholder.svg")}
          alt={content.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <button
          onClick={onBack}
          className="absolute top-4 left-4 md:top-6 md:left-6 p-3 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background active:scale-95 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>

        <div className="absolute top-4 right-4 md:top-6 md:right-6 flex gap-2">
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={cn(
              "p-3 rounded-full backdrop-blur-sm transition-all active:scale-95 min-w-[44px] min-h-[44px] flex items-center justify-center",
              isFavorite ? "bg-[#FF006E] text-white" : "bg-background/80 text-foreground hover:bg-background",
            )}
          >
            <Heart className={cn("w-5 h-5", isFavorite && "fill-current")} />
          </button>
          <button className="p-3 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background active:scale-95 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center">
            <Share2 className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>

      {/* Content Info */}
      <div className="px-4 sm:px-5 md:px-8 -mt-12 md:-mt-16 relative">
        <div className="flex items-end gap-4 md:gap-6">
          <img
            src={getAssetPath(content.image || "/placeholder.svg")}
            alt={content.title}
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl border-4 border-background object-cover shadow-lg shrink-0"
          />
          <div className="flex-1 pb-2 min-w-0">
            <Badge variant="secondary" className="text-[10px] md:text-xs mb-1">
              {typeLabel}
            </Badge>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground leading-tight truncate">
              {content.title}
            </h1>
          </div>
        </div>

        {/* Rating & Stats */}
        <div className="flex items-center gap-4 md:gap-6 mt-4 md:mt-6 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 px-2.5 md:px-3 py-1.5 md:py-1.5 rounded-lg bg-[#FFD60A]/20">
              <Star className="w-4 h-4 md:w-5 md:h-5 text-[#FFD60A] fill-[#FFD60A]" />
              <span className="text-sm md:text-lg font-bold text-foreground">{content.rating}</span>
            </div>
            <span className="text-xs md:text-sm text-muted-foreground">
              {content.reviewCount.toLocaleString()} отзывов
            </span>
          </div>
          {content.year && <span className="text-xs md:text-sm text-muted-foreground">{content.year}</span>}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3 md:mt-4">
          {content.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs md:text-sm">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4 md:mt-6">
          <Button className="flex-1 h-12 md:h-12 rounded-xl bg-gradient-to-r from-[#3A86FF] to-[#8338EC] hover:opacity-90 active:scale-[0.98] text-white border-0 text-sm md:text-base transition-all">
            <ExternalLink className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Открыть
          </Button>
          <Button variant="outline" className="h-12 md:h-12 rounded-xl px-4 bg-transparent min-w-[48px]">
            <Bookmark className="w-5 h-5 md:w-5 md:h-5" />
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 md:gap-6 mt-6 md:mt-8 border-b border-border">
          <button
            onClick={() => setActiveTab("about")}
            className={cn(
              "pb-3 text-sm md:text-base font-medium transition-colors relative min-h-[44px] flex items-end",
              activeTab === "about" ? "text-foreground" : "text-muted-foreground",
            )}
          >
            О контенте
            {activeTab === "about" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3A86FF] rounded-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={cn(
              "pb-3 text-sm md:text-base font-medium transition-colors relative min-h-[44px] flex items-end",
              activeTab === "reviews" ? "text-foreground" : "text-muted-foreground",
            )}
          >
            Отзывы
            {activeTab === "reviews" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3A86FF] rounded-full" />
            )}
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "about" ? (
          <div className="mt-4 md:mt-6">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{content.description}</p>

            {content.platform && (
              <div className="mt-4 md:mt-6">
                <h3 className="text-sm md:text-base font-semibold text-foreground mb-2">Платформы</h3>
                <div className="flex flex-wrap gap-2">
                  {content.platform.map((p) => (
                    <Badge key={p} variant="secondary" className="text-xs md:text-sm">
                      {p}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="mt-4 md:mt-6 space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="p-4 md:p-4 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10 md:w-10 md:h-10">
                    <AvatarImage src={getAssetPath(review.avatar || "/placeholder.svg")} />
                    <AvatarFallback>{review.author[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm md:text-base font-medium text-foreground">{review.author}</span>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "w-3.5 h-3.5 md:w-4 md:h-4",
                              i < review.rating ? "text-[#FFD60A] fill-[#FFD60A]" : "text-muted",
                            )}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs md:text-sm text-muted-foreground">{review.date}</span>
                  </div>
                </div>
                <p className="text-sm md:text-base text-muted-foreground mt-3">{review.text}</p>
                <div className="flex items-center gap-4 mt-3">
                  <button className="flex items-center gap-1.5 text-xs md:text-sm text-muted-foreground hover:text-[#FF006E] active:scale-95 transition-all p-1">
                    <Heart className="w-4 h-4 md:w-4 md:h-4" />
                    {review.likes}
                  </button>
                  <button className="flex items-center gap-1.5 text-xs md:text-sm text-muted-foreground hover:text-foreground active:scale-95 transition-all p-1">
                    <MessageCircle className="w-4 h-4 md:w-4 md:h-4" />
                    Ответить
                  </button>
                </div>
              </div>
            ))}

            <Button
              variant="outline"
              className="w-full h-12 md:h-11 rounded-xl text-sm md:text-base bg-transparent active:scale-[0.98] transition-all"
            >
              Показать все отзывы
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
