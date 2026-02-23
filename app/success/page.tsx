export default function SuccessPage() {
  const steps = [
    'Check your email for the download link',
    'Download the SPECTER ZIP and setup PDF',
    'Install Ollama and pull your chosen model',
    'Copy .env.example and configure your values',
    'Run: docker compose up',
  ]
  return (
    <main style={{ background: '#080810', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'Inter,sans-serif', padding: '24px' }}>
      <div style={{ maxWidth: '540px', width: '100%', textAlign: 'center',
        background: '#0d1117', border: '1px solid rgba(0,212,255,.3)',
        borderRadius: '14px', padding: '52px 36px' }}>
        <div style={{ height: '1px',
          background: 'linear-gradient(90deg,transparent,#00d4ff,transparent)',
          marginBottom: '40px' }} />
        <div style={{ width: '70px', height: '70px', borderRadius: '50%',
          background: 'rgba(0,212,255,.1)', border: '1px solid rgba(0,212,255,.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 28px', fontSize: '1.8rem', color: '#00d4ff' }}>&#10003;</div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f0f6fc',
          marginBottom: '10px' }}>Payment Confirmed</h1>
        <div style={{ display: 'inline-block', background: 'rgba(0,212,255,.08)',
          border: '1px solid rgba(0,212,255,.2)', borderRadius: '50px',
          padding: '4px 14px', fontSize: '.72rem', letterSpacing: '.15em',
          color: '#00d4ff', fontFamily: 'JetBrains Mono,monospace',
          marginBottom: '28px' }}>SPECTER AI &#8212; DELIVERY CONFIRMED</div>
        <p style={{ color: '#8b949e', lineHeight: 1.75, marginBottom: '32px' }}>
          Your download link and setup guide are heading to your email now.
          Check your inbox (and spam folder) within a few minutes.
        </p>
        <div style={{ background: '#080810', border: '1px solid #1a2030',
          borderRadius: '10px', padding: '24px', marginBottom: '32px', textAlign: 'left' }}>
          <h3 style={{ fontSize: '.9rem', fontWeight: 700, color: '#00d4ff',
            marginBottom: '14px' }}>&#9889; Next Steps</h3>
          {steps.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '10px',
              fontSize: '.84rem', color: '#c9d1d9' }}>
              <span style={{ color: '#00d4ff', fontWeight: 700,
                flexShrink: 0 }}>{i + 1}.</span>
              <span>{s}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '.8rem', color: '#4a5568' }}>
          Questions?{' '}
          <a href="mailto:oblivion.designz@gmail.com"
            style={{ color: '#00d4ff', textDecoration: 'none' }}>
            oblivion.designz@gmail.com
          </a>
        </p>
        <div style={{ height: '1px',
          background: 'linear-gradient(90deg,transparent,#00d4ff,transparent)',
          marginTop: '40px', marginBottom: '16px' }} />
        <p style={{ fontSize: '.75rem', color: '#374151' }}>&#169; 2026 Oblivion Labz</p>
      </div>
    </main>
  )
}
