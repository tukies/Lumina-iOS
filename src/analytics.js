const defaultGaMeasurementId = 'G-9RDREGPZ36'
const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || defaultGaMeasurementId

export function initGoogleAnalytics() {
  if (!gaMeasurementId || typeof window === 'undefined') {
    return
  }

  if (document.getElementById('google-analytics-script')) {
    return
  }

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }

  window.gtag('js', new Date())
  window.gtag('config', gaMeasurementId)

  const script = document.createElement('script')
  script.id = 'google-analytics-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
    gaMeasurementId,
  )}`

  document.head.appendChild(script)
}

export function trackEvent(eventName, eventParameters = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }

  window.gtag('event', eventName, eventParameters)
}
