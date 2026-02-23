import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SPECTER AI — Your AI. Your Rules. Zero Cloud.',
  description: '100% local AI command system. Voice, vision, memory, personality. One-time $297. Zero subscriptions. Runs entirely on your hardware.',
  keywords: 'local AI, offline AI, private AI, self-hosted AI, no cloud AI',
  openGraph: {
    title: 'SPECTER AI — Your AI. Your Rules. Zero Cloud.',
    description: 'Sovereign Persistent Executive Core for Total Environment Reign. $297 one-time.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#080810" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: '#080810' }}>{children}</body>
    </html>
  )
}
