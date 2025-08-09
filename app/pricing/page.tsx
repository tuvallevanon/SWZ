
export default function Pricing() {
  const tiers = [
    {name:'Virtual 1:1', price:'$99 / session', features:['45-min Zoom coaching','Personalized program','Client portal access']},
    {name:'In-Person', price:'$149 / session', features:['60-min in studio/house','Form checks & progressions','Client portal access']},
    {name:'Hybrid', price:'$249 / mo', features:['Bi-weekly 1:1','Weekly check-ins','Unlimited messaging']},
  ]
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Pricing</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {tiers.map((t)=>(
          <div key={t.name} className="card">
            <h3 className="text-xl font-bold">{t.name}</h3>
            <p className="text-swz-yellow text-lg">{t.price}</p>
            <ul className="mt-2 list-disc list-inside text-white/80">
              {t.features.map(f=><li key={f}>{f}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
