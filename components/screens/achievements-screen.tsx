"use client"

import type React from "react"

import { Award, Trophy, Star, Flame, Target, Zap, Crown, Lock, CheckCircle2 } from "lucide-react"

interface Achievement {
  id: string
  title: string
  description: string
  icon: React.ElementType
  progress: number
  maxProgress: number
  completed: boolean
  xp: number
  category: string
  rarity: "common" | "rare" | "epic" | "legendary"
}

const achievements: Achievement[] = [
  {
    id: "1",
    title: "Первые шаги",
    description: "Напишите свой первый отзыв",
    icon: Star,
    progress: 1,
    maxProgress: 1,
    completed: true,
    xp: 50,
    category: "Отзывы",
    rarity: "common",
  },
  {
    id: "2",
    title: "Критик",
    description: "Напишите 10 отзывов",
    icon: Award,
    progress: 10,
    maxProgress: 10,
    completed: true,
    xp: 200,
    category: "Отзывы",
    rarity: "rare",
  },
  {
    id: "3",
    title: "Профессионал",
    description: "Напишите 50 отзывов",
    icon: Trophy,
    progress: 47,
    maxProgress: 50,
    completed: false,
    xp: 500,
    category: "Отзывы",
    rarity: "epic",
  },
  {
    id: "4",
    title: "Коллекционер",
    description: "Добавьте 100 элементов в избранное",
    icon: Target,
    progress: 128,
    maxProgress: 100,
    completed: true,
    xp: 300,
    category: "Избранное",
    rarity: "rare",
  },
  {
    id: "5",
    title: "Исследователь",
    description: "Просмотрите 200 страниц контента",
    icon: Flame,
    progress: 234,
    maxProgress: 200,
    completed: true,
    xp: 400,
    category: "Активность",
    rarity: "rare",
  },
  {
    id: "6",
    title: "Лидер мнений",
    description: "Получите 100 лайков на отзывы",
    icon: Zap,
    progress: 89,
    maxProgress: 100,
    completed: false,
    xp: 600,
    category: "Социальное",
    rarity: "epic",
  },
  {
    id: "7",
    title: "Легенда",
    description: "Достигните 1000 XP",
    icon: Crown,
    progress: 1450,
    maxProgress: 1000,
    completed: true,
    xp: 1000,
    category: "Уровень",
    rarity: "legendary",
  },
]

const rarityColors = {
  common: "from-[#6C757D] to-[#495057]",
  rare: "from-[#3A86FF] to-[#0066CC]",
  epic: "from-[#8338EC] to-[#6B21A8]",
  legendary: "from-[#FFD60A] to-[#F59E0B]",
}

const rarityBorders = {
  common: "border-[#6C757D]/30",
  rare: "border-[#3A86FF]/30",
  epic: "border-[#8338EC]/30",
  legendary: "border-[#FFD60A]/30",
}

export function AchievementsScreen({ onBack }: { onBack: () => void }) {
  const completedCount = achievements.filter((a) => a.completed).length
  const totalXP = achievements.filter((a) => a.completed).reduce((acc, a) => acc + a.xp, 0)

  return (
    <div className="pb-4">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm z-10 px-4 py-3 border-b border-border">
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="text-[#3A86FF] text-sm font-medium">
            ← Назад
          </button>
          <h1 className="text-lg font-bold text-foreground">Достижения</h1>
          <div className="w-16" />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-4 py-4 grid grid-cols-2 gap-3">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-[#FFD60A]/10 to-[#F59E0B]/10 border border-[#FFD60A]/20">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#FFD60A] to-[#F59E0B] flex items-center justify-center mb-2">
            <Trophy className="w-5 h-5 text-white" />
          </div>
          <p className="text-2xl font-bold text-foreground">
            {completedCount}/{achievements.length}
          </p>
          <p className="text-xs text-muted-foreground">достижений</p>
        </div>
        <div className="p-4 rounded-2xl bg-gradient-to-br from-[#8338EC]/10 to-[#3A86FF]/10 border border-[#8338EC]/20">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#8338EC] to-[#3A86FF] flex items-center justify-center mb-2">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <p className="text-2xl font-bold text-foreground">{totalXP}</p>
          <p className="text-xs text-muted-foreground">XP заработано</p>
        </div>
      </div>

      {/* Achievements List */}
      <div className="px-4 space-y-3">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`p-4 rounded-2xl bg-card border shadow-sm ${rarityBorders[achievement.rarity]} ${
              !achievement.completed ? "opacity-80" : ""
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${rarityColors[achievement.rarity]} flex items-center justify-center shrink-0`}
              >
                {achievement.completed ? (
                  <achievement.icon className="w-6 h-6 text-white" />
                ) : (
                  <Lock className="w-5 h-5 text-white/70" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-foreground">{achievement.title}</h3>
                      {achievement.completed && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">{achievement.description}</p>
                  </div>
                  <span className="text-xs font-semibold text-[#8338EC]">+{achievement.xp} XP</span>
                </div>

                {/* Progress */}
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-muted-foreground">
                      {Math.min(achievement.progress, achievement.maxProgress)} / {achievement.maxProgress}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {Math.round(
                        (Math.min(achievement.progress, achievement.maxProgress) / achievement.maxProgress) * 100,
                      )}
                      %
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${rarityColors[achievement.rarity]} rounded-full transition-all duration-500`}
                      style={{
                        width: `${Math.min((achievement.progress / achievement.maxProgress) * 100, 100)}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
