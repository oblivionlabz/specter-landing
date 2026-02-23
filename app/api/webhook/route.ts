import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import nodemailer from 'nodemailer'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

export async function POST(req: NextRequest): Promise<NextResponse> {
  const raw = await req.arrayBuffer()
  const body = Buffer.from(raw)
  const sig = req.headers.get('stripe-signature') ?? ''

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unknown error'
    console.error('Webhook error:', msg)
    return NextResponse.json({ error: `Webhook Error: ${msg}` }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const email = session.customer_details?.email
    if (email) {
      try {
        await sendDeliveryEmail(email)
        console.log('Delivery email sent to:', email)
      } catch (e: unknown) {
        console.error('Email failed:', e instanceof Error ? e.message : String(e))
      }
    }
  }

  return NextResponse.json({ received: true })
}

async function sendDeliveryEmail(to: string): Promise<void> {
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'oblivion.designz@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  const url = process.env.SPECTER_DOWNLOAD_URL ?? '#'
  const pdfUrl = 'https://specter.oblivionlabz.net/specter-setup-guide-v1.pdf'

  const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="background:#080810;color:#f0f6fc;font-family:Inter,sans-serif;margin:0;padding:0">
<div style="max-width:560px;margin:0 auto;padding:48px 24px">
  <h1 style="font-size:2rem;font-weight:900;margin:0 0 6px">SPECTER AI</h1>
  <p style="color:#00d4ff;font-size:.82rem;letter-spacing:.1em;margin:0 0 32px">
    YOUR DOWNLOAD IS READY
  </p>
  <div style="background:#0d1117;border:1px solid rgba(0,212,255,.25);border-radius:10px;padding:32px;margin-bottom:24px">
    <p style="color:#c9d1d9;line-height:1.7;margin:0 0 24px">
      Thank you for purchasing SPECTER AI. Your full package is ready.
    </p>
    <div style="text-align:center;margin-bottom:24px">
      <a href="${url}"
        style="display:inline-block;background:#00d4ff;color:#000;font-weight:700;padding:14px 36px;border-radius:6px;text-decoration:none">
        Download SPECTER AI (ZIP)
      </a>
    </div>
    <div style='text-align:center;margin-bottom:24px'>
      <a href='${pdfUrl}'
        style='display:inline-block;background:transparent;color:#00d4ff;font-weight:700;padding:12px 32px;border-radius:6px;text-decoration:none;border:1px solid rgba(0,212,255,.6)'>
        Setup Guide PDF (50+ pages)
      </a>
    </div>
    <p style="color:#8b949e;font-size:.82rem;line-height:1.7;margin:0">
      Includes: Full codebase ZIP, PDF setup guide (50+ pages),
      Docker Compose stack, config templates, 9 persona configs.
    </p>
  </div>
  <div style="background:#080810;border:1px solid #1a2030;border-radius:10px;padding:24px;margin-bottom:24px">
    <h3 style="color:#00d4ff;font-size:.9rem;font-weight:700;margin:0 0 12px">Quick Start</h3>
    <ol style="color:#c9d1d9;font-size:.84rem;line-height:2;padding-left:18px;margin:0">
      <li>Extract the SPECTER ZIP to your working directory</li>
      <li>Read the setup PDF from start to finish</li>
      <li>Install Ollama and pull your chosen model</li>
      <li>Copy .env.example to .env and configure</li>
      <li>Run docker compose up</li>
    </ol>
  </div>
  <p style="color:#4a5568;font-size:.78rem;text-align:center">
    Questions?
    <a href="mailto:oblivion.designz@gmail.com" style="color:#00d4ff">
      oblivion.designz@gmail.com
    </a><br>
    &copy; 2026 Oblivion Labz
  </p>
</div>
</body></html>`

  await transport.sendMail({
    from: '"SPECTER AI" <oblivion.designz@gmail.com>',
    to,
    subject: 'Your SPECTER AI Download Is Ready',
    html,
  })
}
