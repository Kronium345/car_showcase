import { Footer, Navbar } from '@/components'
import './globals.css'


export const metadata = {
  title: 'Car Hub',
  description: 'Showcasing to you the finest car designs all over the world, for your viewing pleasure!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
