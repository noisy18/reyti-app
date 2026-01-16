"use client"

import { Crown, Check, Sparkles, Zap, Shield, Star } from "lucide-react"

interface PremiumScreenProps {
  onBack: () => void
}

const features = [
  { icon: Sparkles, label: "Без рекламы", description: "Полностью чистый интерфейс" },
  { icon: Zap, label: "Ранний доступ", description: "Новые функции раньше всех" },
  { icon: Shield, label: "Приоритетная поддержка", description: "Ответ в течение 24 часов" },
  { icon: Star, label: "Эксклюзивные значки", description: "Уникальные достижения" },
]

const plans = [
  { id: "monthly", label: "Месяц", price: "299 ₽", period: "/мес", popular: false },
  { id: "yearly", label: "Год", price: "2 490 ₽", period: "/год", popular: true, save: "Экономия 30%" },
]

export function PremiumScreen({ onBack }: PremiumScreenProps) {
  return (
    <div className="pb-4">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm z-10 px-4 sm:px-5 md:px-6 py-3 md:py-4 border-b border-border">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <button onClick={onBack} className="text-[#3A86FF] text-sm font-medium min-h-[44px] flex items-center">
            ← Назад
          </button>
          <h1 className="text-lg md:text-xl font-bold text-foreground">Premium</h1>
          <div className="w-16" />
        </div>
      </div>

      <div className="px-4 sm:px-5 md:px-6 py-6 max-w-3xl mx-auto space-y-6">
        {/* Hero */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#3A86FF] to-[#8338EC] flex items-center justify-center mx-auto">
            <Crown className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-foreground">РЕЙТИ Premium</h2>
          <p className="text-sm md:text-base text-muted-foreground">Откройте все возможности приложения</p>
        </div>

        {/* Current Status */}
        <div className="p-4 md:p-5 rounded-2xl bg-gradient-to-r from-[#3A86FF]/20 to-[#8338EC]/20 border border-[#3A86FF]/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#3A86FF] flex items-center justify-center">
              <Check className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm md:text-base font-semibold text-foreground">Подписка активна</p>
              <p className="text-xs md:text-sm text-muted-foreground">Действует до 15 февраля 2025</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider px-1">Преимущества</h3>
          <div className="rounded-2xl bg-card border border-border overflow-hidden shadow-sm">
            {features.map(({ icon: Icon, label, description }, index) => (
              <div
                key={label}
                className={`flex items-center gap-3 p-4 md:p-5 ${index !== features.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3A86FF]/10 to-[#8338EC]/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#3A86FF]" />
                </div>
                <div>
                  <p className="text-sm md:text-base font-medium text-foreground">{label}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{description}</p>
                </div>
                <Check className="w-5 h-5 text-green-500 ml-auto shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Plans */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider px-1">Тарифы</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {plans.map((plan) => (
              <button
                key={plan.id}
                className={`relative p-4 md:p-5 rounded-2xl border-2 text-left transition-all ${
                  plan.popular
                    ? "border-[#3A86FF] bg-gradient-to-br from-[#3A86FF]/5 to-[#8338EC]/5"
                    : "border-border bg-card hover:border-[#3A86FF]/50"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-2.5 left-4 px-2 py-0.5 bg-gradient-to-r from-[#3A86FF] to-[#8338EC] text-white text-[10px] font-medium rounded-full">
                    Популярный
                  </span>
                )}
                <p className="text-sm font-medium text-muted-foreground">{plan.label}</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-2xl md:text-3xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
                {plan.save && <p className="text-xs text-[#3A86FF] font-medium mt-1">{plan.save}</p>}
              </button>
            ))}
          </div>
        </div>

        {/* Manage Subscription */}
        <button className="w-full p-4 rounded-2xl bg-secondary text-foreground text-sm md:text-base font-medium hover:bg-secondary/80 transition-colors">
          Управление подпиской
        </button>
      </div>
    </div>
  )
}
