import { HashRouter, Routes, Route, Navigate, NavLink } from 'react-router-dom'
import { SP2aFlow } from './pages/SP2aFlow'
import { SP2bFlow } from './pages/SP2bFlow'
import { SP3Flow }  from './pages/SP3Flow'
import { SP4Flow }  from './pages/SP4Flow'

const navLinks = [
  { to: '/sp2a', label: '💊 SP2a — Medication Reminder' },
  { to: '/sp2b', label: '🌡️ SP2b — Symptom Check' },
  { to: '/sp3',  label: '💬 SP3 — Consultation' },
  { to: '/sp4',  label: '⚠️ SP4 — Escalation' },
]

export function App() {
  return (
    <HashRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#1a1a2e' }}>
        <nav style={{ background: '#0F0F0F', borderBottom: '1px solid #222', padding: '10px 24px', display: 'flex', gap: 8, flexShrink: 0, flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="/LIA-prototypes/" style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, fontWeight: 500, textDecoration: 'none', padding: '5px 10px', borderRadius: 6, whiteSpace: 'nowrap', marginRight: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
            ← Home
          </a>
          <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.1)', marginRight: 4 }} />
          {navLinks.map(l => (
            <NavLink key={l.to} to={l.to} style={({ isActive }) => ({
              color: isActive ? '#5E6AD2' : 'rgba(255,255,255,0.5)',
              fontSize: 12, fontWeight: isActive ? 600 : 400,
              textDecoration: 'none', padding: '5px 10px', borderRadius: 6,
              background: isActive ? '#1A1A2E' : 'transparent',
              whiteSpace: 'nowrap',
            })}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Routes>
            <Route path="/"     element={<Navigate to="/sp2a" replace />} />
            <Route path="/sp2a" element={<SP2aFlow />} />
            <Route path="/sp2b" element={<SP2bFlow />} />
            <Route path="/sp3"  element={<SP3Flow />} />
            <Route path="/sp4"  element={<SP4Flow />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  )
}
