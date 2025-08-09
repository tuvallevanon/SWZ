
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'SWZ — Stronger With Zo',
  description: 'Pre/Postpartum personal training and client portal'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-20 border-b border-white/10 bg-black/70 backdrop-blur">
          <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <img src="/swz-logo.svg" alt="SWZ logo" className="h-8 w-auto" />
              <span className="sr-only">SWZ</span>
            </Link>
            <nav className="flex gap-4 text-sm">
              <Link href="/pricing">Pricing</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/login" className="btn">Client Login</Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        <footer className="mx-auto max-w-5xl px-4 py-12 text-sm text-white/60">
          © {new Date().getFullYear()} SWZ — Stronger With Zo • <Link href="/legal" className="underline">Privacy & Terms</Link>
        </footer>
      </body>
    </html>
  )
}
