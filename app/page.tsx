'use client'

import { useState } from 'react'
import type { CSSProperties } from 'react'

const PAY = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK ?? '#'

function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <defs>
        <filter id="gl" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <path
        d="M50 8L80 20L88 44L80 70L68 62L58 74L50 62L42 74L32 62L20 70L12 44L20 20Z"
        stroke="#00d4ff" strokeWidth="2.5" fill="rgba(0,212,255,.06)" filter="url(#gl)"
      />
      <circle cx="38" cy="41" r="7" fill="#00d4ff" filter="url(#gl)" />
      <circle cx="62" cy="41" r="7" fill="#00d4ff" filter="url(#gl)" />
      <path d="M35 57 Q50 51 65 57" stroke="#00d4ff" strokeWidth="2.5"
        fill="none" strokeLinecap="round" filter="url(#gl)" />
    </svg>
  )
}

function Btn({ href, outline, large, children }: {
  href: string; outline?: boolean; large?: boolean; children: React.ReactNode
}) {
  const base: CSSProperties = {
    display: 'inline-block', textDecoration: 'none', fontWeight: 700,
    borderRadius: '6px', fontFamily: 'Inter,sans-serif',
    padding: large ? '15px 38px' : '10px 24px',
    fontSize: large ? '1.05rem' : '.9rem',
    letterSpacing: '.04em', whiteSpace: 'nowrap', transition: 'all .2s',
  }
  if (outline) return (
    <a href={href} style={{ ...base, color: '#00d4ff', background: 'transparent',
      border: '1px solid rgba(0,212,255,.35)' }}>{children}</a>
  )
  return (
    <a href={href} style={{ ...base, background: '#00d4ff', color: '#000',
      boxShadow: '0 0 24px rgba(0,212,255,.5),0 0 48px rgba(0,212,255,.12)' }}>{children}</a>
  )
}

function FCard({ icon, title, body }: { icon: string; title: string; body: string }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: '#0d1117', borderRadius: '10px', padding: '28px',
        border: `1px solid ${hov ? 'rgba(0,212,255,.35)' : '#1a2030'}`,
        boxShadow: hov ? '0 0 24px rgba(0,212,255,.06)' : 'none',
        transition: 'border-color .25s,box-shadow .25s',
      }}
    >
      <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{icon}</div>
      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f0f6fc', marginBottom: '8px' }}>{title}</h3>
      <p style={{ fontSize: '.875rem', color: '#8b949e', lineHeight: 1.65 }}>{body}</p>
    </div>
  )
}

function PCard({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div style={{ background: '#0d1117', border: '1px solid #2d1515',
      borderRadius: '10px', padding: '28px' }}>
      <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{icon}</div>
      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f0f6fc', marginBottom: '8px' }}>{title}</h3>
      <p style={{ fontSize: '.875rem', color: '#8b949e', lineHeight: 1.65 }}>{body}</p>
    </div>
  )
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #1a2030', padding: '20px 0' }}>
      <button onClick={() => setOpen(o => !o)}
        style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          gap: '16px', textAlign: 'left' }}>
        <span style={{ fontSize: '.95rem', fontWeight: 600, color: '#f0f6fc' }}>{q}</span>
        <span style={{ color: '#00d4ff', fontSize: '1.4rem', lineHeight: 1, flexShrink: 0 }}>
          {open ? '−' : '+'}
        </span>
      </button>
      {open && <p style={{ marginTop: '12px', fontSize: '.875rem',
        color: '#8b949e', lineHeight: 1.7 }}>{a}</p>}
    </div>
  )
}

const Divider = () => (
  <div style={{ height: '1px',
    background: 'linear-gradient(90deg,transparent,#00d4ff,transparent)', opacity: .22 }} />
)

const Tick = ({ text }: { text: string }) => (
  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '10px' }}>
    <span style={{ color: '#00d4ff', fontWeight: 700, flexShrink: 0 }}>✓</span>
    <span style={{ fontSize: '.88rem', color: '#c9d1d9' }}>{text}</span>
  </div>
)

export default function Home() {
  const tag: CSSProperties = {
    fontSize: '.68rem', letterSpacing: '.22em', color: '#00d4ff',
    fontFamily: 'JetBrains Mono,monospace', marginBottom: '14px',
  }
  const h2: CSSProperties = {
    fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 800,
    color: '#f0f6fc', marginBottom: '14px', letterSpacing: '-.01em',
  }
  const lead: CSSProperties = {
    color: '#8b949e', fontSize: '1rem', lineHeight: 1.7,
    maxWidth: '560px', margin: '0 auto 52px',
  }

  return (
    <main style={{ background: '#080810', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(8,8,16,.88)', backdropFilter: 'blur(14px)',
        borderBottom: '1px solid #1a2030' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', height: '62px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 24px' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center',
            gap: '10px', textDecoration: 'none' }}>
            <Logo size={32} />
            <span style={{ fontSize: '1.1rem', fontWeight: 800,
              letterSpacing: '.1em', color: '#f0f6fc' }}>
              SPECTER<span style={{ color: '#00d4ff' }}> AI</span>
            </span>
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <a href="#features" style={{ color: '#8b949e', textDecoration: 'none', fontSize: '.88rem' }}>Features</a>
            <a href="#specs" style={{ color: '#8b949e', textDecoration: 'none', fontSize: '.88rem' }}>Specs</a>
            <a href="#pricing" style={{ color: '#8b949e', textDecoration: 'none', fontSize: '.88rem' }}>Pricing</a>
            <a href="#faq" style={{ color: '#8b949e', textDecoration: 'none', fontSize: '.88rem' }}>FAQ</a>
            <Btn href={PAY}>Buy Now</Btn>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '120px 24px 80px', overflow: 'hidden',
        backgroundImage:
          'linear-gradient(rgba(0,212,255,.03) 1px,transparent 1px),' +
          'linear-gradient(90deg,rgba(0,212,255,.03) 1px,transparent 1px)',
        backgroundSize: '40px 40px' }}>
        <div style={{ position: 'absolute', top: '38%', left: '50%',
          transform: 'translate(-50%,-50%)', width: '700px', height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse,rgba(0,212,255,.07) 0%,transparent 65%)',
          animation: 'pulseGlow 4s ease-in-out infinite', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '840px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(0,212,255,.07)', border: '1px solid rgba(0,212,255,.22)',
            borderRadius: '50px', padding: '5px 16px', marginBottom: '28px',
            fontSize: '.7rem', letterSpacing: '.18em', color: '#00d4ff',
            fontFamily: 'JetBrains Mono,monospace' }}>
            &#9672; SOVEREIGN PERSISTENT EXECUTIVE CORE
          </div>
          <div style={{ marginBottom: '20px' }}><Logo size={72} /></div>
          <h1 style={{ fontSize: 'clamp(2.6rem,7vw,4.8rem)', fontWeight: 900,
            lineHeight: 1.05, marginBottom: '24px', letterSpacing: '-.02em' }}>
            <span style={{ color: '#f0f6fc' }}>Your AI.</span><br />
            <span style={{ color: '#00d4ff',
              textShadow: '0 0 32px rgba(0,212,255,.55)' }}>Your Rules.</span><br />
            <span style={{ color: '#f0f6fc' }}>Zero Cloud.</span>
          </h1>
          <p style={{ fontSize: 'clamp(1rem,2.4vw,1.2rem)', color: '#8b949e',
            maxWidth: '580px', margin: '0 auto 40px', lineHeight: 1.75 }}>
            A complete, self-hosted AI command system that runs{' '}
            <strong style={{ color: '#f0f6fc' }}>entirely on your hardware</strong>.
            Voice. Vision. Memory. Personality. No subscriptions. No data harvesting.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Btn href={PAY} large>&#9889; Get SPECTER &#8212; $297</Btn>
            <Btn href="#features" outline large>Explore Features &#8595;</Btn>
          </div>
          <p style={{ marginTop: '18px', fontSize: '.78rem', color: '#4a5568' }}>
            One-time purchase &nbsp;&#8226;&nbsp; Instant delivery &nbsp;&#8226;&nbsp; Yours forever
          </p>
          <div style={{ display: 'flex', gap: '40px', justifyContent: 'center',
            flexWrap: 'wrap', marginTop: '52px', paddingTop: '32px',
            borderTop: '1px solid #1a2030' }}>
            {([
              ['100%', 'Local & Private'], ['9', 'AI Personas'],
              ['1-Cmd', 'Docker Deploy'], ['$0/mo', 'After Purchase'],
            ] as [string, string][]).map(([n, l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#00d4ff' }}>{n}</div>
                <div style={{ fontSize: '.78rem', color: '#8b949e', marginTop: '4px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* PROBLEM */}
      <section style={{ padding: '88px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <p style={tag}>THE PROBLEM</p>
          <h2 style={h2}>Cloud AI Is a Leash</h2>
          <p style={lead}>
            Every prompt you send to a cloud AI feeds a corporation your ideas, plans, and work.
            And you pay monthly for the privilege.
          </p>
        </div>
        <div style={{ display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '20px' }}>
          <PCard icon="⛔" title="Your Data Is the Product"
            body="Every query to a cloud AI is logged and used to improve their models. Your code, strategies, and conversations — collected, analyzed, never forgotten." />
          <PCard icon="💸" title="Endless Subscriptions"
            body="$20/mo. $50/mo. $200/mo for API access. Stop paying and your AI vanishes. You are renting intelligence you will never own." />
          <PCard icon="🤖" title="Generic, Stateless Responses"
            body="Cloud AIs do not know you. Every session starts from zero. No memory of your preferences, your projects, your working style." />
        </div>
      </section>

      <Divider />

      {/* SOLUTION */}
      <section style={{ padding: '88px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))',
          gap: '60px', alignItems: 'center' }}>
          <div>
            <p style={tag}>THE SOLUTION</p>
            <h2 style={{ ...h2, textAlign: 'left' }}>SPECTER Lives on Your Machine.</h2>
            <p style={{ color: '#8b949e', lineHeight: 1.75, marginBottom: '20px' }}>
              SPECTER is a complete local AI command system. It runs on your GPU,
              speaks in your chosen voice, sees your screen, remembers everything you
              tell it, and adapts its personality to your workflow.
            </p>
            <p style={{ color: '#8b949e', lineHeight: 1.75, marginBottom: '32px' }}>
              No cloud. No API keys. No monthly fees. Raw local AI power owned outright.
            </p>
            <Btn href={PAY} large>&#9889; Get SPECTER Now</Btn>
          </div>
          <div style={{ background: '#0a0e16', border: '1px solid rgba(0,212,255,.2)',
            borderRadius: '10px', padding: '28px 24px',
            fontFamily: 'JetBrains Mono,monospace', fontSize: '.72rem',
            color: '#8b949e', lineHeight: 1.9, overflowX: 'auto' }}>
            <pre style={{ margin: 0, color: 'inherit' }}>{`+----------------------+
|   SPECTER AI CORE    |
+----+----+-----+------+
     |    |     |
 [VOICE][VIS][MEM][PERS]
     |    |     |
     +----+-----+
           |
  +------------------+
  |  LOCAL LLM LAYER |
  |  Ollama / GGUF   |
  |  RTX 3090 Native |
  +------------------+`}</pre>
          </div>
        </div>
      </section>

      <Divider />

      {/* FEATURES */}
      <section id="features" style={{ padding: '88px 24px',
        maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <p style={tag}>CAPABILITIES</p>
          <h2 style={h2}>Every System. Fully Local.</h2>
          <p style={lead}>Nine battle-tested modules. 100% on your hardware.</p>
        </div>
        <div style={{ display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(270px,1fr))', gap: '20px' }}>
          <FCard icon="🎤" title="Voice Interface"
            body="Wake word detection, Whisper STT for near-perfect transcription, and TTS with RVC voice cloning. Speak to your system in a voice you designed." />
          <FCard icon="👁️" title="Vision + Screen Capture"
            body="Real-time screen capture with OCR. SPECTER reads your screen, analyzes your workflow, and responds with full environmental context." />
          <FCard icon="🧠" title="Personality Engine"
            body="9 distinct AI personas with dynamic mood drift. Strategic confidence, relentless drive, pragmatic grit. You pick who shows up." />
          <FCard icon="🗄️" title="Persistent Memory"
            body="Hybrid knowledge graph plus vector store. Remembers your projects, preferences, and context across every session indefinitely." />
          <FCard icon="🔒" title="100% Local and Private"
            body="Zero telemetry. Zero cloud calls. Every byte stays on your machine. Your conversations and code never leave your hardware." />
          <FCard icon="🐳" title="One-Command Docker Deploy"
            body="Full Docker Compose stack. Spin up the entire system in one command. Reproducible, portable, and production-ready out of the box." />
          <FCard icon="&#9889;" title="Multi-Agent Orchestration"
            body="Parallel agent execution with task routing and hierarchical control. Delegate complex workflows to specialized sub-agents." />
          <FCard icon="💰" title="Crypto Wallet Module"
            body="Built-in wallet system for web3 interactions. Sign transactions, check balances, and integrate crypto ops into your AI workflows." />
          <FCard icon="🔧" title="Fully Hackable"
            body="Clean Python codebase with documented APIs. Add tools, swap models, build custom personas, or fork the entire architecture." />
        </div>
      </section>

      <Divider />

      {/* SPECS */}
      <section id="specs" style={{ padding: '88px 24px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={tag}>TECHNICAL SPECS</p>
          <h2 style={h2}>Requirements and What You Get</h2>
        </div>
        <div style={{ display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '24px' }}>
          <div style={{ background: '#0d1117', border: '1px solid #1a2030',
            borderRadius: '10px', padding: '28px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#00d4ff',
              marginBottom: '20px' }}>System Requirements</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.84rem' }}>
              <tbody>
                {([
                  ['GPU', 'RTX 3090 recommended'],
                  ['VRAM', '16GB+ (24GB ideal)'],
                  ['RAM', '32GB+ system RAM'],
                  ['OS', 'Linux / Windows WSL2'],
                  ['Python', '3.11+'],
                  ['Docker', '24.0+'],
                  ['Ollama', 'Latest (setup included)'],
                  ['Disk', '50GB+ free space'],
                ] as [string, string][]).map(([k, v]) => (
                  <tr key={k} style={{ borderBottom: '1px solid #1a2030' }}>
                    <td style={{ padding: '9px 0', color: '#8b949e', width: '42%' }}>{k}</td>
                    <td style={{ padding: '9px 0', color: '#f0f6fc' }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ background: '#0d1117', border: '1px solid #1a2030',
            borderRadius: '10px', padding: '28px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#00d4ff',
              marginBottom: '20px' }}>What You Receive</h3>
            {[
              'Full SPECTER codebase (ZIP)',
              'PDF setup guide (50+ pages)',
              'Docker Compose stack',
              'Config templates + .env examples',
              '9 pre-built AI persona configs',
              'Whisper STT integration scripts',
              'RVC voice cloning setup guide',
              'Knowledge graph schema + seed data',
              'Multi-agent orchestration templates',
              'Crypto wallet integration module',
            ].map(t => <Tick key={t} text={t} />)}
          </div>
        </div>
      </section>

      <Divider />

      {/* PRICING */}
      <section id="pricing" style={{ padding: '88px 24px',
        maxWidth: '560px', margin: '0 auto', textAlign: 'center' }}>
        <p style={tag}>PRICING</p>
        <h2 style={h2}>One Price. Yours Forever.</h2>
        <p style={{ color: '#8b949e', marginBottom: '40px', lineHeight: 1.7 }}>
          No tiers, no upsells, no monthly bills. Buy once, run forever.
        </p>
        <div style={{ background: '#0d1117', border: '1px solid rgba(0,212,255,.35)',
          borderRadius: '14px', padding: '48px 36px',
          boxShadow: '0 0 60px rgba(0,212,255,.05)',
          position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%',
            height: '1px',
            background: 'linear-gradient(90deg,transparent,#00d4ff,transparent)' }} />
          <div style={{ display: 'inline-block', background: 'rgba(0,212,255,.1)',
            border: '1px solid rgba(0,212,255,.3)', borderRadius: '50px',
            padding: '4px 14px', fontSize: '.7rem', letterSpacing: '.15em',
            color: '#00d4ff', fontFamily: 'JetBrains Mono,monospace',
            marginBottom: '20px' }}>FOUNDER&#8217;S EDITION</div>
          <div style={{ fontSize: '4rem', fontWeight: 900, color: '#f0f6fc',
            lineHeight: 1, marginBottom: '4px' }}>$297</div>
          <div style={{ color: '#8b949e', fontSize: '.88rem',
            marginBottom: '32px' }}>one-time &#8226; lifetime access</div>
          <div style={{ textAlign: 'left', marginBottom: '36px' }}>
            {[
              'Full SPECTER codebase ZIP',
              'PDF setup guide (50+ pages)',
              'Docker Compose stack',
              '9 AI persona configs',
              'Voice + vision modules',
              'Memory architecture (KG + vector)',
              'Multi-agent orchestration templates',
              'Crypto wallet module',
              'Config templates + examples',
              'Free updates for 12 months',
            ].map(t => <Tick key={t} text={t} />)}
          </div>
          <Btn href={PAY} large>&#9889; Buy SPECTER &#8212; $297</Btn>
          <p style={{ marginTop: '16px', fontSize: '.78rem', color: '#4a5568' }}>
            Secure checkout via Stripe &#8226; Instant delivery to your email
          </p>
        </div>
        <div style={{ marginTop: '20px', padding: '16px', background: '#0d1117',
          border: '1px solid #1a2030', borderRadius: '8px',
          fontSize: '.8rem', color: '#8b949e', lineHeight: 1.65 }}>
          <strong style={{ color: '#f0f6fc' }}>GPU Required</strong>{' — '}
          SPECTER requires a dedicated NVIDIA GPU with 16GB+ VRAM.
          RTX 3090 (24GB) is the ideal setup.
        </div>
      </section>

      <Divider />

      {/* FAQ */}
      <section id="faq" style={{ padding: '88px 24px', maxWidth: '760px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={tag}>FAQ</p>
          <h2 style={h2}>Questions? Answered.</h2>
        </div>
        <Faq q="Is a dedicated GPU required?"
          a="Yes. SPECTER is built for local LLM inference and requires an NVIDIA GPU with at least 16GB VRAM. The RTX 3090 (24GB) is the ideal setup. CPU-only mode enables basic text features but disables voice and vision." />
        <Faq q="Does it work on Mac or AMD GPUs?"
          a="macOS with Apple Silicon (M1/M2/M3) is experimental. Voice and LLM inference work via llama.cpp Metal backend. AMD GPU support via ROCm is possible but not officially tested." />
        <Faq q="What AI models does SPECTER use?"
          a="SPECTER is model-agnostic and runs any GGUF-compatible model via Ollama. Pre-configured for Qwen2.5, Mistral, Llama 3, and DeepSeek. You choose what runs on your hardware." />
        <Faq q="What do I receive after purchase?"
          a="Immediately after checkout you receive a download link to the full codebase ZIP, a 50+ page PDF setup guide, Docker Compose files, config templates, and all persona configs." />
        <Faq q="Is this a subscription or a one-time payment?"
          a="Strictly one-time. $297 once and the code is yours forever. No license checks, no DRM, no phone-home. The only ongoing cost is your electricity." />
        <Faq q="Can I modify or extend SPECTER?"
          a="Yes, completely. Clean Python source with documented APIs. Add tools, swap models, build custom personas, or fork the entire architecture." />
      </section>

      <Divider />

      {/* FOOTER */}
      <footer style={{ padding: '48px 24px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center',
          gap: '8px', marginBottom: '12px' }}>
          <Logo size={26} />
          <span style={{ fontSize: '1rem', fontWeight: 700, color: '#8b949e' }}>SPECTER AI</span>
        </div>
        <p style={{ fontSize: '.82rem', color: '#4a5568', marginBottom: '6px' }}>
          A product by{' '}
          <a href="https://oblivionlabz.net"
            style={{ color: '#00d4ff', textDecoration: 'none' }}>Oblivion Labz</a>
        </p>
        <p style={{ fontSize: '.78rem', color: '#374151' }}>
          &#169; 2026 Oblivion Labz. All rights reserved.
        </p>
      </footer>

    </main>
  )
}
