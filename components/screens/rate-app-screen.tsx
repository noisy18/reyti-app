"use client"

import { useState } from "react"
import { Star, Heart, ExternalLink } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { getAssetPath } from "@/lib/get-asset-path"

interface RateAppScreenProps {
  onBack: () => void
}

export function RateAppScreen({ onBack }: RateAppScreenProps) {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [review, setReview] = useState("")

  const handleSubmit = () => {
    onBack()
  }

  return (
    <div className="pb-4">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm z-10 px-4 sm:px-5 md:px-6 py-3 md:py-4 border-b border-border">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <button onClick={onBack} className="text-[#3A86FF] text-sm font-medium min-h-[44px] flex items-center">
            ← Назад
          </button>
          <h1 className="text-lg md:text-xl font-bold text-foreground">Оценить приложение</h1>
          <div className="w-16" />
        </div>
      </div>

      <div className="px-4 sm:px-5 md:px-6 py-6 max-w-3xl mx-auto space-y-6">
        {/* App Info */}
        <div className="flex flex-col items-center text-center gap-4">
          <Image
            src={getAssetPath("/logo-reyti.png") || "/placeholder.svg"}
            alt="РЕЙТИ"
            width={80}
            height={80}
            className="w-20 h-20 md:w-24 md:h-24 rounded-2xl"
          />
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground">РЕЙТИ</h2>
            <p className="text-sm md:text-base text-muted-foreground">Цифровой мир — в фокусе</p>
          </div>
        </div>

        {/* Rating Stars */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm md:text-base text-foreground">Как вам приложение?</p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="p-1 transition-transform hover:scale-110"
              >
                <Star
                  className={`w-10 h-10 md:w-12 md:h-12 transition-colors ${
                    star <= (hoveredRating || rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                  }`}
                />
              </button>
            ))}
          </div>
          {rating > 0 && (
            <p className="text-sm text-muted-foreground">
              {rating === 5 && "Отлично! Спасибо за высокую оценку!"}
              {rating === 4 && "Хорошо! Мы стараемся стать лучше!"}
              {rating === 3 && "Неплохо. Расскажите, что можно улучшить?"}
              {rating <= 2 && "Нам жаль. Расскажите, что пошло не так?"}
            </p>
          )}
        </div>

        {/* Review Text */}
        {rating > 0 && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Ваш отзыв (необязательно)</label>
            <Textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Расскажите, что вам понравилось или что можно улучшить..."
              className="min-h-[120px] rounded-xl resize-none"
            />
          </div>
        )}

        {/* Submit Button */}
        {rating > 0 && (
          <button
            onClick={handleSubmit}
            className="flex items-center justify-center gap-2 w-full p-4 rounded-xl bg-gradient-to-r from-[#3A86FF] to-[#8338EC] text-white font-medium hover:opacity-90 active:scale-[0.98] transition-all"
          >
            <Heart className="w-5 h-5" />
            <span>Отправить оценку</span>
          </button>
        )}

        {/* Store Links */}
        <div className="pt-4 border-t border-border space-y-3">
          <p className="text-sm text-muted-foreground text-center">Или оцените нас в магазине приложений</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors">
              <span className="text-lg">🍎</span>
              <span className="text-sm font-medium text-foreground">App Store</span>
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors">
              <span className="text-lg">🤖</span>
              <span className="text-sm font-medium text-foreground">Google Play</span>
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
