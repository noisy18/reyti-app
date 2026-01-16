"use client"

import { ChevronRight, BookOpen, MessageCircle, FileText, Shield } from "lucide-react"

interface HelpScreenProps {
  onBack: () => void
}

const helpTopics = [
  { id: "getting-started", label: "Начало работы", description: "Как пользоваться приложением", icon: BookOpen },
  { id: "reviews", label: "Отзывы и рейтинги", description: "Как оставлять отзывы", icon: MessageCircle },
  { id: "account", label: "Аккаунт и профиль", description: "Настройки профиля", icon: FileText },
  { id: "privacy", label: "Безопасность", description: "Защита данных", icon: Shield },
]

const faq = [
  { q: "Как изменить имя пользователя?", a: "Перейдите в Настройки → Редактировать профиль" },
  { q: "Как отменить подписку Premium?", a: "Перейдите в Настройки → Premium подписка → Управление" },
  { q: "Как удалить отзыв?", a: "Откройте отзыв и нажмите на три точки в правом верхнем углу" },
]

export function HelpScreen({ onBack }: HelpScreenProps) {
  return (
    <div className="pb-4">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm z-10 px-4 sm:px-5 md:px-6 py-3 md:py-4 border-b border-border">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <button onClick={onBack} className="text-[#3A86FF] text-sm font-medium min-h-[44px] flex items-center">
            ← Назад
          </button>
          <h1 className="text-lg md:text-xl font-bold text-foreground">Справка</h1>
          <div className="w-16" />
        </div>
      </div>

      <div className="px-4 sm:px-5 md:px-6 py-4 max-w-3xl mx-auto space-y-5">
        {/* Help Topics */}
        <div>
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-1">
            Темы помощи
          </h2>
          <div className="rounded-2xl bg-card border border-border overflow-hidden shadow-sm">
            {helpTopics.map(({ id, label, description, icon: Icon }, index) => (
              <button
                key={id}
                className={`flex items-center justify-between w-full p-4 md:p-5 hover:bg-secondary transition-colors text-left ${
                  index !== helpTopics.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-[#3A86FF]/10 to-[#8338EC]/10 flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 md:w-5 md:h-5 text-[#3A86FF]" />
                  </div>
                  <div>
                    <p className="text-sm md:text-base text-foreground">{label}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{description}</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
              </button>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-1">
            Частые вопросы
          </h2>
          <div className="rounded-2xl bg-card border border-border overflow-hidden shadow-sm">
            {faq.map(({ q, a }, index) => (
              <div key={index} className={`p-4 md:p-5 ${index !== faq.length - 1 ? "border-b border-border" : ""}`}>
                <p className="text-sm md:text-base text-foreground font-medium">{q}</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
