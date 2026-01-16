"use client"

import { Bell, MessageSquare, Heart, Award, Megaphone } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"

interface NotificationsScreenProps {
  onBack: () => void
}

export function NotificationsScreen({ onBack }: NotificationsScreenProps) {
  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    comments: true,
    likes: true,
    achievements: true,
    news: false,
  })

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const notificationItems = [
    { id: "push", label: "Push-уведомления", description: "Получать уведомления на устройство", icon: Bell },
    { id: "email", label: "Email-уведомления", description: "Получать уведомления на почту", icon: MessageSquare },
    { id: "comments", label: "Комментарии", description: "Ответы на ваши отзывы", icon: MessageSquare },
    { id: "likes", label: "Лайки", description: "Когда ваш отзыв понравился", icon: Heart },
    { id: "achievements", label: "Достижения", description: "Новые достижения и награды", icon: Award },
    { id: "news", label: "Новости и обновления", description: "Информация о новых функциях", icon: Megaphone },
  ]

  return (
    <div className="pb-4">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm z-10 px-4 sm:px-5 md:px-6 py-3 md:py-4 border-b border-border">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <button onClick={onBack} className="text-[#3A86FF] text-sm font-medium min-h-[44px] flex items-center">
            ← Назад
          </button>
          <h1 className="text-lg md:text-xl font-bold text-foreground">Уведомления</h1>
          <div className="w-16" />
        </div>
      </div>

      <div className="px-4 sm:px-5 md:px-6 py-4 max-w-3xl mx-auto">
        <div className="rounded-2xl bg-card border border-border overflow-hidden shadow-sm">
          {notificationItems.map(({ id, label, description, icon: Icon }, index) => (
            <div
              key={id}
              className={`flex items-center justify-between p-4 md:p-5 ${
                index !== notificationItems.length - 1 ? "border-b border-border" : ""
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
              <Switch
                checked={notifications[id as keyof typeof notifications]}
                onCheckedChange={() => toggleNotification(id as keyof typeof notifications)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
