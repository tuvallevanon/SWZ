
import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Stronger With Zo — safe, confident training for pregnancy and postpartum.</h1>
        <p className="text-lg text-white/80">Personalized plans, gentle progressions, pelvic-floor-aware coaching.</p>
        <div className="flex gap-3 justify-center">
          <Link className="btn" href={process.env.CALENDLY_URL || '#'}>Book a call</Link>
          <Link className="btn" href="/login">Client Login</Link>
        </div>
        <p className="text-white/70">Build strength safely • Track every set • See steady progress</p>
      </section>
      <section className="grid md:grid-cols-3 gap-4">
        {[
          {title:'Pre/Postpartum experts', text:'Programs adapted by stage, with safety notes and symptom flags.'},
          {title:'Track every set', text:'Weights, reps, RPE and wellness — all in one place.'},
          {title:'See gentle progress', text:'Smart suggestions nudge you forward without overreaching.'},
        ].map((c,i)=>(
          <div key={i} className="card">
            <h3 className="font-semibold mb-2 text-swz-yellow">{c.title}</h3>
            <p className="text-white/80">{c.text}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
