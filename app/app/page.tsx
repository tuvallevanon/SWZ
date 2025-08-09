
import Link from 'next/link'
export default function AppHome() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Your Portal</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <Link href="/app/today" className="card">Today</Link>
        <Link href="/app/progress" className="card">Progress</Link>
        <Link href="/app/library" className="card">Library</Link>
        <Link href="/app/profile" className="card">Profile</Link>
      </div>
    </div>
  )
}
