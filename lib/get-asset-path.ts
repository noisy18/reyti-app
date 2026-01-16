// Utility to get correct asset path for GitHub Pages deployment
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === "production" ? "/reyti-app" : ""

  // If path already starts with http or data:, return as-is
  if (path.startsWith("http") || path.startsWith("data:") || path.startsWith("blob:")) {
    return path
  }

  // If path starts with /, prepend basePath
  if (path.startsWith("/")) {
    return `${basePath}${path}`
  }

  return path
}

// For placeholder SVGs that need query params
export function getPlaceholderPath(height: number, width: number, query?: string): string {
  const basePath = process.env.NODE_ENV === "production" ? "/reyti-app" : ""
  const queryParam = query ? `&query=${encodeURIComponent(query)}` : ""
  return `${basePath}/placeholder.svg?height=${height}&width=${width}${queryParam}`
}
