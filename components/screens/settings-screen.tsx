"use client"

import type React from "react"
import {
  User,
  Bell,
  Moon,
  Sun,
  Shield,
  HelpCircle,
  MessageSquare,
  Star,
  LogOut,
  ChevronRight,
  Smartphone,
  Database,
  Crown,
} from "lucide-react"
import { Switch } from "@/components/ui/switch"

interface SettingsScreenProps {
  onBack: () => void
  onNavigate: (screen: string) => void
  isDarkMode: boolean
  onToggleDarkMode: (value: boolean) => void
}

interface SettingsItem {
  id: string
  label: string
  description?: string
  icon: React.ElementType
  type: "link" | "toggle"
  screen?: string
}

const settingsGroups = [
  {
    title: "Аккаунт",
    items: [
      { id: "profile", label: "Редактировать профиль", icon: User, type: "link" as const, screen: "edit-profile" },
      {
        id: "premium",
        label: "Premium подписка",
        description: "Активна до 15.02.2025",
        icon: Crown,
        type: "link" as const,
        screen: "premium",
      },
      { id: "notifications", label: "Уведомления", icon: Bell, type: "link" as const, screen: "notifications" },
    ],
  },
  {
    title: "Внешний вид",
    items: [{ id: "dark-mode", label: "Тёмная тема", icon: Moon, type: "toggle" as const }],
  },
  {
    title: "Данные и конфиденциальность",
    items: [
      { id: "privacy", label: "Приватность", icon: Shield, type: "link" as const, screen: "privacy" },
      { id: "data", label: "Управление данными", icon: Database, type: "link" as const, screen: "data-management" },
      {
        id: "connected",
        label: "Подключённые сервисы",
        icon: Smartphone,
        type: "link" as const,
        screen: "connected-services",
      },
    ],
  },
  {
    title: "Поддержка",
    items: [
      { id: "help", label: "Справка", icon: HelpCircle, type: "link" as const, screen: "help" },
      { id: "feedback", label: "Обратная связь", icon: MessageSquare, type: "link" as const, screen: "feedback" },
      { id: "rate", label: "Оценить приложение", icon: Star, type: "link" as const, screen: "rate-app" },
    ],
  },
]

export function SettingsScreen({ onBack, onNavigate, isDarkMode, onToggleDarkMode }: SettingsScreenProps) {
  const handleItemClick = (item: SettingsItem) => {
    if (item.type === "link" && item.screen) {
      onNavigate(item.screen)
    }
  }

  return (
    <div className="pb-4">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm z-10 px-4 sm:px-5 md:px-6 py-3 md:py-4 border-b border-border">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <button onClick={onBack} className="text-[#3A86FF] text-sm font-medium min-h-[44px] flex items-center">
            ← Назад
          </button>
          <h1 className="text-lg md:text-xl font-bold text-foreground">Настройки</h1>
          <div className="w-16" />
        </div>
      </div>

      {/* Settings Groups */}
      <div className="px-4 sm:px-5 md:px-6 py-4 space-y-5 max-w-3xl mx-auto">
        {settingsGroups.map((group) => (
          <div key={group.title}>
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-1">
              {group.title}
            </h2>
            <div className="rounded-2xl bg-card border border-border overflow-hidden shadow-sm">
              {group.items.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className={`flex items-center justify-between w-full p-4 md:p-5 hover:bg-secondary active:bg-secondary/80 transition-colors text-left min-h-[60px] ${
                    index !== group.items.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-[#3A86FF]/10 to-[#8338EC]/10 flex items-center justify-center">
                      {item.id === "dark-mode" ? (
                        isDarkMode ? (
                          <Moon className="w-4.5 h-4.5 md:w-5 md:h-5 text-[#3A86FF]" />
                        ) : (
                          <Sun className="w-4.5 h-4.5 md:w-5 md:h-5 text-[#3A86FF]" />
                        )
                      ) : (
                        <item.icon className="w-4.5 h-4.5 md:w-5 md:h-5 text-[#3A86FF]" />
                      )}
                    </div>
                    <div>
                      <span className="text-sm md:text-base text-foreground">{item.label}</span>
                      {item?.description && (
                        <p className="text-xs md:text-sm text-muted-foreground mt-0.5">{item.description}</p>
                      )}
                    </div>
                  </div>
                  {item.type === "toggle" ? (
                    <Switch
                      checked={isDarkMode}
                      onCheckedChange={onToggleDarkMode}
                      onClick={(e) => e.stopPropagation()}
                    />
                  ) : (
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Logout Button */}
        <button className="flex items-center justify-center gap-2 w-full p-4 rounded-2xl bg-destructive/10 text-destructive hover:bg-destructive/20 active:scale-[0.98] transition-all min-h-[56px]">
          <LogOut className="w-5 h-5" />
          <span className="text-sm md:text-base font-medium">Выйти из аккаунта</span>
        </button>

        {/* App Version */}
        <div className="text-center pt-2">
          <p className="text-xs text-muted-foreground">РЕЙТИ версия 1.0.0</p>
          <p className="text-xs text-muted-foreground mt-1">Цифровой мир — в фокусе</p>
        </div>
      </div>
    </div>
  )
}
