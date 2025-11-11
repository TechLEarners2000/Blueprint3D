import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '3D Converter',
  description: 'Convert 2D images to 3D models',
  generator: 'v0.dev',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <header className="flex items-center justify-between p-4 bg-white shadow-sm">
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="Logo" className="h-8 w-8" />
            <h1 className="text-xl font-bold">3D Converter</h1>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
