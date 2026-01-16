"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Camera } from "lucide-react"
import { getAssetPath } from "@/lib/get-asset-path"

interface EditProfileScreenProps {
  onBack: () => void
}

export function EditProfileScreen({ onBack }: EditProfileScreenProps) {
  const [name, setName] = useState("Алексей Козлов")
  const [username, setUsername] = useState("alexkozlov")
  const [bio, setBio] = useState("Любитель игр и хорошего кино")
  const [email, setEmail] = useState("alex@example.com")

  const handleSave = () => {
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
          <h1 className="text-lg md:text-xl font-bold text-foreground">Редактировать профиль</h1>
          <button onClick={handleSave} className="text-[#3A86FF] text-sm font-medium min-h-[44px] flex items-center">
            Сохранить
          </button>
        </div>
      </div>

      <div className="px-4 sm:px-5 md:px-6 py-6 max-w-3xl mx-auto space-y-6">
        {/* Avatar */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative">
            <Avatar className="w-24 h-24 md:w-28 md:h-28 border-2 border-[#3A86FF]">
              <AvatarImage src={getAssetPath("/placeholder.svg?height=112&width=112") || "/placeholder.svg"} />
              <AvatarFallback className="text-2xl">АК</AvatarFallback>
            </Avatar>
            <button className="absolute bottom-0 right-0 w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#3A86FF] flex items-center justify-center text-white shadow-lg">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <button className="text-[#3A86FF] text-sm font-medium">Изменить фото</button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Имя</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введите имя"
              className="h-12 md:h-11 rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Имя пользователя</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">@</span>
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
                className="h-12 md:h-11 rounded-xl pl-8"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="h-12 md:h-11 rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">О себе</label>
            <Textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Расскажите о себе"
              className="min-h-[100px] rounded-xl resize-none"
            />
          </div>
        </div>

        {/* Delete Account */}
        <div className="pt-4 border-t border-border">
          <button className="text-destructive text-sm font-medium">Удалить аккаунт</button>
        </div>
      </div>
    </div>
  )
}
