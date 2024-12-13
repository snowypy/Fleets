import type { Metadata } from 'next'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Sea Cat Scallywags',
  description: 'A community of people who love to play Sea of Thieves together.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-windlass">

          <div className="min-h-screen bg-black text-white flex flex-col">
            <SiteHeader />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
      </body>
    </html>
  )
}

