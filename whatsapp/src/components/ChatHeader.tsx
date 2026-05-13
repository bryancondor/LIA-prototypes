interface ChatHeaderProps { contactName: string; status?: string }

export function ChatHeader({ contactName, status = 'online' }: ChatHeaderProps) {
  return (
    <div style={{ background: '#075E54', padding: '6px 12px 10px', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
      <span style={{ color: 'white', fontSize: 20, opacity: 0.9, lineHeight: 1 }}>‹</span>
      <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'linear-gradient(135deg,#25D366,#128C7E)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: 16, flexShrink: 0 }}>L</div>
      <div style={{ flex: 1 }}>
        <div style={{ color: 'white', fontSize: 15, fontWeight: 600, lineHeight: 1.2 }}>{contactName}</div>
        <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 11.5, marginTop: 1 }}>{status}</div>
      </div>
      <div style={{ display: 'flex', gap: 18, color: 'white', fontSize: 17, opacity: 0.9 }}>
        <span>📹</span><span>📞</span><span>⋮</span>
      </div>
    </div>
  )
}
