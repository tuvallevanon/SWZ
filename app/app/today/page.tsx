
export default function Today() {
  // MVP placeholder. In a full build, fetch assigned workout + items.
  const items = [
    { name: "Box Squat", sets: [{setNo:1},{setNo:2}] },
    { name: "Glute Bridge", sets: [{setNo:1}]}
  ]
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Today</h1>
      {items.map((ex)=>(
        <div key={ex.name} className="card">
          <h3 className="font-semibold text-lg">{ex.name}</h3>
          <div className="grid gap-2 mt-2">
            {ex.sets.map(s=>(
              <div key={s.setNo} className="grid grid-cols-4 gap-2">
                <input placeholder="Weight (kg)" />
                <input placeholder="Reps" />
                <select>
                  {[6,7,8,9,10].map(n=><option key={n}>{n}</option>)}
                </select>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> <span>Symptoms</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button className="btn">Save Logs</button>
    </div>
  )
}
