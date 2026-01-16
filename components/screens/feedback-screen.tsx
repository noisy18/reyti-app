"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Send, Bug, Lightbulb, MessageSquare } from "lucide-react"

interface FeedbackScreenProps {
  onBack: () => void
}

const feedbackTypes = [
  { id: "bug", label: "Баг", icon: Bug },
  { id: "feature", label: "Идея", icon: Lightbulb },
  { id: "other", label: "Другое", icon: MessageSquare },
]

export function FeedbackScreen({ onBack }: FeedbackScreenProps) {
  const [type, setType] = useState("bug")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = () => {
    // Submit feedback logic
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
          <h1 className="text-lg md:text-xl font-bold text-foreground">Обратная связь</h1>
          <div className="w-16" />
        </div>
      </div>

      <div className="px-4 sm:px-5 md:px-6 py-6 max-w-3xl mx-auto space-y-5">
        {/* Feedback Type */}
        <div>
          <h2 className="text-sm font-medium text-foreground mb-3">Тип обращения</h2>
          <div className="grid grid-cols-3 gap-3">
            {feedbackTypes.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setType(id)}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                  type === id ? "border-[#3A86FF] bg-[#3A86FF]/5" : "border-border bg-card hover:border-[#3A86FF]/50"
                }`}
              >
                <Icon className={`w-6 h-6 ${type === id ? "text-[#3A86FF]" : "text-muted-foreground"}`} />
                <span className={`text-sm font-medium ${type === id ? "text-[#3A86FF]" : "text-foreground"}`}>
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Тема</label>
          <Input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Кратко опишите проблему"
            className="h-12 md:h-11 rounded-xl"
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Сообщение</label>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Подробно опишите вашу проблему или предложение..."
            className="min-h-[150px] rounded-xl resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="flex items-center justify-center gap-2 w-full p-4 rounded-xl bg-gradient-to-r from-[#3A86FF] to-[#8338EC] text-white font-medium hover:opacity-90 active:scale-[0.98] transition-all"
        >
          <Send className="w-5 h-5" />
          <span>Отправить</span>
        </button>
      </div>
    </div>
  )
}
