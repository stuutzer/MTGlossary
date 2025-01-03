import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import Aileron from 'next/font/local'
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css'

const aileron = Aileron({ 
  src: [
    {
      path: '../public/fonts/Aileron-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Aileron-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Aileron-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Aileron-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Aileron-SemiBoldItalic.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../public/fonts/Aileron-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
 })

export const metadata: Metadata = {
  title: 'MTGlossary',
  description: 'An Online Glossary for Magic: The Gathering.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={aileron.className}>
        <ThemeProvider defaultTheme='dark'>{children}</ThemeProvider>
        <SpeedInsights />
      </body>
      
    </html>
  )
}
