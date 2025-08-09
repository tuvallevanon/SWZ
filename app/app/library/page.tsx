
const items = [
  { name:'Box Squat', notes:'Sit to box, ribs down', cautions:'Avoid bearing down' },
  { name:'Pallof Press', notes:'Resist rotation', cautions:'' }
]
export default function Library() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Exercise Library</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map(i=>(
          <div className="card" key={i.name}>
            <h3 className="font-semibold">{i.name}</h3>
            <p className="text-white/80">{i.notes}</p>
            {i.cautions && <p className="text-xs text-red-300 mt-2">Caution: {i.cautions}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
