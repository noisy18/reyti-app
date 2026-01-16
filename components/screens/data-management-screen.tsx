"use client"

import { Download, Trash2, RefreshCw, Database, HardDrive } from "lucide-react"

interface DataManagementScreenProps {
  onBack: () => void
}

export function DataManagementScreen({ onBack }: DataManagementScreenProps) {
  return (
    <div className="pb-4">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm z-10 px-4 sm:px-5 md:px-6 py-3 md:py-4 border-b border-border">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <button onClick={onBack} className="text-[#3A86FF] text-sm font-medium min-h-[44px] flex items-center">
            ← Назад
          </button>
          <h1 className="text-lg md:text-xl font-bold text-foreground">Управление данными</h1>
          <div className="w-16" />
        </div>
      </div>

      <div className="px-4 sm:px-5 md:px-6 py-4 max-w-3xl mx-auto space-y-5">
        {/* Storage Info */}
        <div className="rounded-2xl bg-card border border-border p-4 md:p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3A86FF]/10 to-[#8338EC]/10 flex items-center justify-center">
              <HardDrive className="w-5 h-5 text-[#3A86FF]" />
            </div>
            <div>
              <p className="text-sm md:text-base font-medium text-foreground">Использование хранилища</p>
              <p className="text-xs md:text-sm text-muted-foreground">24.5 МБ из 100 МБ</p>
            </div>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div className="h-full w-1/4 bg-gradient-to-r from-[#3A86FF] to-[#8338EC] rounded-full" />
          </div>
        </div>

        {/* Data Actions */}
        <div>
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-1">
            Действия с данными
          </h2>
          <div className="rounded-2xl bg-card border border-border overflow-hidden shadow-sm">
            <button className="flex items-center gap-3 w-full p-4 md:p-5 hover:bg-secondary transition-colors text-left border-b border-border">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-[#3A86FF]/10 to-[#8338EC]/10 flex items-center justify-center">
                <Download className="w-4.5 h-4.5 md:w-5 md:h-5 text-[#3A86FF]" />
              </div>
              <div>
                <p className="text-sm md:text-base text-foreground">Скачать мои данные</p>
                <p className="text-xs md:text-sm text-muted-foreground">Экспорт всех ваших данных</p>
              </div>
            </button>

            <button className="flex items-center gap-3 w-full p-4 md:p-5 hover:bg-secondary transition-colors text-left border-b border-border">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-[#3A86FF]/10 to-[#8338EC]/10 flex items-center justify-center">
                <RefreshCw className="w-4.5 h-4.5 md:w-5 md:h-5 text-[#3A86FF]" />
              </div>
              <div>
                <p className="text-sm md:text-base text-foreground">Синхронизировать данные</p>
                <p className="text-xs md:text-sm text-muted-foreground">Последняя синхронизация: сегодня</p>
              </div>
            </button>

            <button className="flex items-center gap-3 w-full p-4 md:p-5 hover:bg-secondary transition-colors text-left">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-[#3A86FF]/10 to-[#8338EC]/10 flex items-center justify-center">
                <Database className="w-4.5 h-4.5 md:w-5 md:h-5 text-[#3A86FF]" />
              </div>
              <div>
                <p className="text-sm md:text-base text-foreground">Очистить кэш</p>
                <p className="text-xs md:text-sm text-muted-foreground">Освободить 12.3 МБ</p>
              </div>
            </button>
          </div>
        </div>

        {/* Danger Zone */}
        <div>
          <h2 className="text-xs font-semibold text-destructive uppercase tracking-wider mb-2 px-1">Опасная зона</h2>
          <button className="flex items-center gap-3 w-full p-4 md:p-5 rounded-2xl bg-destructive/10 hover:bg-destructive/20 transition-colors text-left">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-destructive/20 flex items-center justify-center">
              <Trash2 className="w-4.5 h-4.5 md:w-5 md:h-5 text-destructive" />
            </div>
            <div>
              <p className="text-sm md:text-base text-destructive font-medium">Удалить все данные</p>
              <p className="text-xs md:text-sm text-destructive/70">Это действие необратимо</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
