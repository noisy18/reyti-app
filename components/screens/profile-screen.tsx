"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Settings, ChevronRight, Star, Heart, Clock, Award, Crown } from "lucide-react"
import { cn } from "@/lib/utils"
import { getAssetPath } from "@/lib/get-asset-path"

interface ProfileScreenProps {
  onNavigate?: (screen: string) => void
}

const stats = [
  { label: "Отзывы", value: 47, icon: Star },
  { label: "Избранное", value: 128, icon: Heart },
  { label: "Просмотрено", value: 234, icon: Clock },
]

const menuItems = [
  { label: "Мои отзывы", icon: Star, screen: "my-reviews" },
  { label: "Избранное", icon: Heart, screen: "favorites" },
  { label: "История", icon: Clock, screen: "history" },
  { label: "Достижения", icon: Award, screen: "achievements" },
  { label: "Настройки", icon: Settings, screen: "settings" },
]

export function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  return (
    <div className="px-4 sm:px-5 md:px-6 lg:px-8 pb-4">
      {/* Header */}
      <div className="flex items-center justify-between py-4 md:py-6">
        <h1 className="text-xl md:text-2xl font-bold text-foreground">Профиль</h1>
        <button
          onClick={() => onNavigate?.("settings")}
          className="p-2.5 rounded-full hover:bg-secondary active:bg-secondary/80 transition-colors"
        >
          <Settings className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:gap-8">
        {/* Left Column - Profile & Stats */}
        <div className="w-full md:w-80 md:shrink-0">
          {/* Profile Card */}
          <div className="p-4 md:p-6 rounded-2xl bg-card border border-border shadow-sm">
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16 md:w-20 md:h-20 border-2 border-[#3A86FF]">
                <AvatarImage src={getAssetPath("/placeholder.svg?height=80&width=80") || "/placeholder.svg"} />
                <AvatarFallback>АК</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-foreground truncate">Алексей Козлов</h2>
                  <Badge className="bg-gradient-to-r from-[#3A86FF] to-[#8338EC] text-white text-[10px] px-2 py-0.5 border-0 shrink-0">
                    <Crown className="w-3 h-3 mr-1" />
                    Premium
                  </Badge>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground mt-0.5">@alexkozlov</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1 truncate">Любитель игр и хорошего кино</p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-around mt-4 pt-4 border-t border-border">
              {stats.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-1.5">
                    <Icon className="w-4 h-4 text-[#3A86FF]" />
                    <span className="text-lg md:text-xl font-bold text-foreground">{value}</span>
                  </div>
                  <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Banner */}
          <div className="mt-4 p-4 md:p-5 rounded-2xl bg-gradient-to-r from-[#3A86FF]/20 to-[#8338EC]/20 border border-[#3A86FF]/30">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-sm md:text-base font-semibold text-foreground">Premium активен</h3>
                <p className="text-xs md:text-sm text-muted-foreground mt-0.5">До 15 февраля 2025</p>
              </div>
              <button className="px-3 md:px-4 py-2 md:py-2 rounded-lg bg-gradient-to-r from-[#3A86FF] to-[#8338EC] text-white text-xs md:text-sm font-medium hover:opacity-90 active:scale-95 transition-all shrink-0">
                Продлить
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Menu */}
        <div className="flex-1 mt-4 md:mt-0">
          <div className="rounded-2xl bg-card border border-border overflow-hidden shadow-sm">
            {menuItems.map(({ label, icon: Icon, screen }, index) => (
              <button
                key={label}
                onClick={() => onNavigate?.(screen)}
                className={cn(
                  "flex items-center justify-between w-full p-4 md:p-5 hover:bg-secondary active:bg-secondary/80 transition-colors text-left min-h-[52px]",
                  index !== menuItems.length - 1 && "border-b border-border",
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm md:text-base text-foreground">{label}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
