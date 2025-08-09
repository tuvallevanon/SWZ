
'use client'
import { supabase } from '@/lib/supabaseClient'
import { useState } from 'react'

export default function Login() {
  const [email,setEmail] = useState('')
  const [sent,setSent] = useState(false)
  async function send() {
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (!error) setSent(true)
    else alert(error.message)
  }
  return (
    <div className="max-w-md space-y-4">
      <h1 className="text-3xl font-bold">Login</h1>
      <p className="text-white/80">We’ll email you a magic link to sign in.</p>
      <input placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)} />
      <button className="btn" onClick={send}>Send magic link</button>
      {sent && <p className="text-green-400">Check your email!</p>}
    </div>
  )
}
