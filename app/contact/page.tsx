
'use client'
import { useState } from 'react'

export default function Contact() {
  const [form,setForm] = useState({name:'',email:'',message:''})
  const href = `mailto:hello@example.com?subject=SWZ%20Contact%20from%20${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + "\n\nFrom: " + form.email)}`
  return (
    <div className="max-w-xl space-y-4">
      <h1 className="text-3xl font-bold">Contact</h1>
      <div className="space-y-2">
        <label>Name</label>
        <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/>
        <label>Email</label>
        <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/>
        <label>Message</label>
        <textarea rows={5} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="How can we help?"/>
      </div>
      <div className="flex gap-2">
        <a className="btn" href={href}>Send Email</a>
        <a className="btn" href={process.env.WHATSAPP_URL || '#'}>WhatsApp</a>
      </div>
    </div>
  )
}
