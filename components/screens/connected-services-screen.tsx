"use client"

import { Check, Plus } from "lucide-react"

interface ConnectedServicesScreenProps {
  onBack: () => void
}

const services = [
  { id: "google", name: "Google", icon: "🔵", connected: true, description: "Вход через Google" },
  { id: "apple", name: "Apple", icon: "🍎", connected: false, description: "Вход через Apple ID" },
  { id: "telegram", name: "Telegram", icon: "✈️", connected: true, description: "Уведомления в Telegram" },
  { id: "vk", name: "ВКонтакте", icon: "🔷", connected: false, description: "Делиться отзывами" },
]

export function ConnectedServicesScreen({ onBack }: ConnectedServicesScreenProps) {
  return (
    <div className="pb-4">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm z-10 px-4 sm:px-5 md:px-6 py-3 md:py-4 border-b border-border">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <button onClick={onBack} className="text-[#3A86FF] text-sm font-medium min-h-[44px] flex items-center">
            ← Назад
          </button>
          <h1 className="text-lg md:text-xl font-bold text-foreground">Подключённые сервисы</h1>
          <div className="w-16" />
        </div>
      </div>

      <div className="px-4 sm:px-5 md:px-6 py-4 max-w-3xl mx-auto">
        <div className="rounded-2xl bg-card border border-border overflow-hidden shadow-sm">
          {services.map(({ id, name, icon, connected, description }, index) => (
            <div
              key={id}
              className={`flex items-center justify-between p-4 md:p-5 ${
                index !== services.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-secondary flex items-center justify-center text-xl">
                  {icon}
                </div>
                <div>
                  <p className="text-sm md:text-base text-foreground font-medium">{name}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{description}</p>
                </div>
              </div>
              {connected ? (
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-500/10 text-green-600 text-sm font-medium">
                  <Check className="w-4 h-4" />
                  <span className="hidden sm:inline">Подключено</span>
                </button>
              ) : (
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#3A86FF]/10 text-[#3A86FF] text-sm font-medium hover:bg-[#3A86FF]/20 transition-colors">
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">Подключить</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
