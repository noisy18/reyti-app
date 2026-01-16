"use client"

import { useState, useEffect } from "react"
import { AppLayout } from "@/components/app-layout"
import { HomeScreen } from "@/components/screens/home-screen"
import { SearchScreen } from "@/components/screens/search-screen"
import { ContentDetailScreen } from "@/components/screens/content-detail-screen"
import { ProfileScreen } from "@/components/screens/profile-screen"
import { DiscoverScreen } from "@/components/screens/discover-screen"
import { MyReviewsScreen } from "@/components/screens/my-reviews-screen"
import { FavoritesScreen } from "@/components/screens/favorites-screen"
import { HistoryScreen } from "@/components/screens/history-screen"
import { AchievementsScreen } from "@/components/screens/achievements-screen"
import { SettingsScreen } from "@/components/screens/settings-screen"
import { EditProfileScreen } from "@/components/screens/edit-profile-screen"
import { PremiumScreen } from "@/components/screens/premium-screen"
import { NotificationsScreen } from "@/components/screens/notifications-screen"
import { PrivacyScreen } from "@/components/screens/privacy-screen"
import { DataManagementScreen } from "@/components/screens/data-management-screen"
import { ConnectedServicesScreen } from "@/components/screens/connected-services-screen"
import { HelpScreen } from "@/components/screens/help-screen"
import { FeedbackScreen } from "@/components/screens/feedback-screen"
import { RateAppScreen } from "@/components/screens/rate-app-screen"

export type Screen =
  | "home"
  | "search"
  | "discover"
  | "profile"
  | "content-detail"
  | "my-reviews"
  | "favorites"
  | "history"
  | "achievements"
  | "settings"
  | "edit-profile"
  | "premium"
  | "notifications"
  | "privacy"
  | "data-management"
  | "connected-services"
  | "help"
  | "feedback"
  | "rate-app"

export interface ContentItem {
  id: string
  title: string
  type: "app" | "game" | "movie" | "series" | "website"
  rating: number
  reviewCount: number
  image: string
  description: string
  tags: string[]
  year?: number
  platform?: string[]
}

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home")
  const [selectedContent, setSelectedContent] = useState<ContentItem | null>(null)
  const [previousScreen, setPreviousScreen] = useState<Screen>("home")
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const handleContentSelect = (content: ContentItem) => {
    setSelectedContent(content)
    setPreviousScreen(currentScreen)
    setCurrentScreen("content-detail")
  }

  const handleBack = () => {
    setCurrentScreen(previousScreen)
    setSelectedContent(null)
  }

  const handleProfileNavigate = (screen: string) => {
    setPreviousScreen("profile")
    setCurrentScreen(screen as Screen)
  }

  const handleSettingsNavigate = (screen: string) => {
    setPreviousScreen("settings")
    setCurrentScreen(screen as Screen)
  }

  const handleBackToProfile = () => {
    setCurrentScreen("profile")
  }

  const handleBackToSettings = () => {
    setCurrentScreen("settings")
  }

  return (
    <AppLayout currentScreen={currentScreen} onNavigate={setCurrentScreen}>
      {currentScreen === "home" && <HomeScreen onContentSelect={handleContentSelect} />}
      {currentScreen === "search" && <SearchScreen onContentSelect={handleContentSelect} />}
      {currentScreen === "discover" && <DiscoverScreen onContentSelect={handleContentSelect} />}
      {currentScreen === "profile" && <ProfileScreen onNavigate={handleProfileNavigate} />}
      {currentScreen === "content-detail" && selectedContent && (
        <ContentDetailScreen content={selectedContent} onBack={handleBack} />
      )}
      {currentScreen === "my-reviews" && <MyReviewsScreen onBack={handleBackToProfile} />}
      {currentScreen === "favorites" && (
        <FavoritesScreen onBack={handleBackToProfile} onContentSelect={handleContentSelect} />
      )}
      {currentScreen === "history" && (
        <HistoryScreen onBack={handleBackToProfile} onContentSelect={handleContentSelect} />
      )}
      {currentScreen === "achievements" && <AchievementsScreen onBack={handleBackToProfile} />}
      {currentScreen === "settings" && (
        <SettingsScreen
          onBack={handleBackToProfile}
          onNavigate={handleSettingsNavigate}
          isDarkMode={isDarkMode}
          onToggleDarkMode={setIsDarkMode}
        />
      )}
      {currentScreen === "edit-profile" && <EditProfileScreen onBack={handleBackToSettings} />}
      {currentScreen === "premium" && <PremiumScreen onBack={handleBackToSettings} />}
      {currentScreen === "notifications" && <NotificationsScreen onBack={handleBackToSettings} />}
      {currentScreen === "privacy" && <PrivacyScreen onBack={handleBackToSettings} />}
      {currentScreen === "data-management" && <DataManagementScreen onBack={handleBackToSettings} />}
      {currentScreen === "connected-services" && <ConnectedServicesScreen onBack={handleBackToSettings} />}
      {currentScreen === "help" && <HelpScreen onBack={handleBackToSettings} />}
      {currentScreen === "feedback" && <FeedbackScreen onBack={handleBackToSettings} />}
      {currentScreen === "rate-app" && <RateAppScreen onBack={handleBackToSettings} />}
    </AppLayout>
  )
}
