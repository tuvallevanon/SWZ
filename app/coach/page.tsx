
import Link from 'next/link'
export default function Coach() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Coach Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <Link href="/coach/clients" className="card">Clients</Link>
        <Link href="/coach/programs" className="card">Programs</Link>
        <Link href="/coach/exports" className="card">Exports</Link>
      </div>
    </div>
  )
}
