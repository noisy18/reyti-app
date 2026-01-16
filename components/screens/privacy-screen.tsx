"use client"

import { Eye, EyeOff, Users, Activity, MapPin } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"

interface PrivacyScreenProps {
  onBack: () => void
}

export function PrivacyScreen({ onBack }: PrivacyScreenProps) {
  const [settings, setSettings] = useState({
    publicProfile: true,
    showActivity: true,
    showFavorites: false,
    shareLocation: false,
  })

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const privacyItems = [
    {
      id: "publicProfile",
      label: "Публичный профиль",
      description: "Другие пользователи могут видеть ваш профиль",
      icon: Eye,
    },
    {
      id: "showActivity",
      label: "Показывать активность",
      description: "Отображать вашу активность в профиле",
      icon: Activity,
    },
    {
      id: "showFavorites",
      label: "Показывать избранное",
      description: "Другие видят ваш список избранного",
      icon: Users,
    },
    {
      id: "shareLocation",
      label: "Делиться местоположением",
      description: "Для персонализированных рекомендаций",
      icon: MapPin,
    },
  ]

  return (
    <div className="pb-4">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm z-10 px-4 sm:px-5 md:px-6 py-3 md:py-4 border-b border-border">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <button onClick={onBack} className="text-[#3A86FF] text-sm font-medium min-h-[44px] flex items-center">
            ← Назад
          </button>
          <h1 className="text-lg md:text-xl font-bold text-foreground">Приватность</h1>
          <div className="w-16" />
        </div>
      </div>

      <div className="px-4 sm:px-5 md:px-6 py-4 max-w-3xl mx-auto space-y-5">
        {/* Privacy Settings */}
        <div className="rounded-2xl bg-card border border-border overflow-hidden shadow-sm">
          {privacyItems.map(({ id, label, description, icon: Icon }, index) => (
            <div
              key={id}
              className={`flex items-center justify-between p-4 md:p-5 ${
                index !== privacyItems.length - 1 ? "border-b border-border" : ""
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
                checked={settings[id as keyof typeof settings]}
                onCheckedChange={() => toggleSetting(id as keyof typeof settings)}
              />
            </div>
          ))}
        </div>

        {/* Blocked Users */}
        <div>
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-1">
            Заблокированные пользователи
          </h2>
          <div className="rounded-2xl bg-card border border-border p-4 md:p-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-[#3A86FF]/10 to-[#8338EC]/10 flex items-center justify-center">
                <EyeOff className="w-4.5 h-4.5 md:w-5 md:h-5 text-[#3A86FF]" />
              </div>
              <div>
                <p className="text-sm md:text-base text-foreground">Чёрный список</p>
                <p className="text-xs md:text-sm text-muted-foreground">0 заблокированных пользователей</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
