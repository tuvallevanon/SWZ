
import Link from 'next/link'
export default function Clients() {
  const list = [
    { id:'alice', name:'Alice', flag:false },
    { id:'beth', name:'Beth', flag:true }
  ]
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Clients</h1>
      <div className="grid gap-2">
        {list.map(c=>(
          <Link key={c.id} href={`/coach/clients/${c.id}`} className="card flex justify-between">
            <span>{c.name}</span>
            {c.flag && <span className="text-red-300 text-sm">Recent symptoms</span>}
          </Link>
        ))}
      </div>
    </div>
  )
}
