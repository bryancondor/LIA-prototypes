import { ChatHeader } from './ChatHeader'
import { InputBar }   from './InputBar'

const WA_BG = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`

interface PhoneFrameProps { label?: string; children: React.ReactNode }

export function PhoneFrame({ label, children }: PhoneFrameProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: 375, height: 760, background: '#111', borderRadius: 48, padding: 12, boxShadow: '0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px #333, inset 0 0 0 2px #2a2a2a', flexShrink: 0 }}>
        <div style={{ width: '100%', height: '100%', borderRadius: 38, overflow: 'hidden', display: 'flex', flexDirection: 'column', background: '#ECE5DD' }}>
          <div style={{ background: '#075E54', padding: '12px 20px 4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
            <span style={{ color: 'white', fontSize: 12, fontWeight: 600 }}>9:58</span>
            <div style={{ display: 'flex', gap: 5, color: 'white', fontSize: 10 }}><span>▲▲▲</span><span>WiFi</span><span>🔋</span></div>
          </div>
          <ChatHeader contactName="LIA" />
          <div style={{ flex: 1, overflowY: 'auto', padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 3, backgroundImage: WA_BG }}>
            <div style={{ alignSelf: 'center', background: 'rgba(255,255,255,0.85)', color: '#667781', fontSize: 11, padding: '4px 10px', borderRadius: 7, margin: '6px 0', boxShadow: '0 1px 1px rgba(0,0,0,0.08)' }}>TODAY</div>
            {children}
          </div>
          <InputBar />
        </div>
      </div>
      {label && <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, textAlign: 'center', marginTop: 10, letterSpacing: '0.5px', textTransform: 'uppercase' }}>{label}</div>}
    </div>
  )
}
