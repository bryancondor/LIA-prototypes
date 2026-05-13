export function InputBar() {
  return (
    <div style={{ background: '#F0F2F5', padding: '8px 10px', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
      <div style={{ flex: 1, background: 'white', borderRadius: 22, padding: '9px 14px', fontSize: 13.5, color: '#999', display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 17, opacity: 0.5 }}>😊</span>
        <span>Type a message</span>
        <span style={{ marginLeft: 'auto', fontSize: 17, opacity: 0.5 }}>📎</span>
      </div>
      <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 18, flexShrink: 0 }}>🎤</div>
    </div>
  )
}
