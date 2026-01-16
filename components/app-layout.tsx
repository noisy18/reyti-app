"use client"

import type { ReactNode } from "react"
import type { Screen } from "@/app/page"
import { Home, Search, Compass, User } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { getAssetPath } from "@/lib/get-asset-path"

interface AppLayoutProps {
  children: ReactNode
  currentScreen: Screen
  onNavigate: (screen: Screen) => void
}

const navItems = [
  { screen: "home" as const, icon: Home, label: "Главная" },
  { screen: "search" as const, icon: Search, label: "Поиск" },
  { screen: "discover" as const, icon: Compass, label: "Обзор" },
  { screen: "profile" as const, icon: User, label: "Профиль" },
]

export function AppLayout({ children, currentScreen, onNavigate }: AppLayoutProps) {
  const showNav = currentScreen !== "content-detail"

  return (
    <div className="min-h-dvh bg-background flex overflow-x-hidden">
      {/* Desktop Sidebar */}
      {showNav && (
        <aside className="hidden md:flex flex-col w-64 border-r border-border bg-card fixed left-0 top-0 h-full z-40">
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <Image
                src={getAssetPath("/logo-reyti.png") || "/placeholder.svg"}
                alt="РЕЙТИ"
                width={40}
                height={40}
                className="w-10 h-10 rounded-xl"
              />
              <div>
                <p className="text-base font-bold text-foreground">РЕЙТИ</p>
                <p className="text-xs text-muted-foreground">Цифровой мир — в фокусе</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {navItems.map(({ screen, icon: Icon, label }) => (
                <li key={screen}>
                  <button
                    onClick={() => onNavigate(screen)}
                    className={cn(
                      "flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all duration-200 text-left",
                      currentScreen === screen
                        ? "bg-gradient-to-r from-[#3A86FF] to-[#8338EC] text-white"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary",
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">© 2026 РЕЙТИ</p>
          </div>
        </aside>
      )}

      {/* Main Content */}
      <main className={cn("flex-1 min-h-dvh w-full", showNav && "md:ml-64")}>
        <div className="w-full max-w-6xl mx-auto pb-24 md:pb-8">{children}</div>
      </main>

      {/* Mobile Bottom Navigation */}
      {showNav && (
        <nav
          className="md:hidden fixed bottom-0 left-0 right-0 flex items-center justify-around py-2 px-2 bg-card/95 backdrop-blur-md border-t border-border z-50"
          style={{ paddingBottom: "calc(0.5rem + var(--safe-area-inset-bottom, 0px))" }}
        >
          {navItems.map(({ screen, icon: Icon, label }) => (
            <button
              key={screen}
              onClick={() => onNavigate(screen)}
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 px-4 py-2 rounded-xl transition-all duration-200 min-w-[64px]",
                currentScreen === screen ? "text-[#3A86FF]" : "text-muted-foreground active:text-foreground",
              )}
            >
              <Icon className={cn("w-6 h-6 transition-transform", currentScreen === screen && "scale-110")} />
              <span className="text-[10px] font-medium">{label}</span>
            </button>
          ))}
        </nav>
      )}
    </div>
  )
}
