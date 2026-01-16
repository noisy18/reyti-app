"use client"

import type { ContentItem } from "@/app/page"
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { getAssetPath } from "@/lib/get-asset-path"

interface ContentCardProps {
  content: ContentItem
  onClick: () => void
}

const typeIcons = {
  app: "📱",
  game: "🎮",
  movie: "🎬",
  series: "📺",
  website: "🌐",
}

export function ContentCard({ content, onClick }: ContentCardProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col rounded-2xl bg-card border border-border overflow-hidden hover:border-[#3A86FF]/50 transition-all duration-200 hover:shadow-lg active:scale-[0.98] text-left group w-full"
    >
      <div className="relative aspect-[4/5] sm:aspect-square overflow-hidden">
        <img
          src={getAssetPath(content.image || "/placeholder.svg")}
          alt={content.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2">
          <span className="text-base sm:text-lg md:text-xl">{typeIcons[content.type]}</span>
        </div>
        <div className="absolute top-2 right-2 flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm">
          <Star className="w-3 h-3 text-[#FFD60A] fill-[#FFD60A]" />
          <span className="text-[10px] sm:text-xs font-medium text-white">{content.rating}</span>
        </div>
      </div>
      <div className="p-2.5 sm:p-3 md:p-4">
        <h3 className="text-xs sm:text-sm md:text-base font-semibold text-foreground truncate">{content.title}</h3>
        <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-0.5 line-clamp-2">
          {content.description}
        </p>
        <div className="flex items-center gap-1 mt-2">
          <Badge variant="secondary" className="text-[9px] sm:text-[10px] md:text-xs px-1.5 py-0">
            {content.tags[0]}
          </Badge>
        </div>
      </div>
    </button>
  )
}
