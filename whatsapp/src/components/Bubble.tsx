interface BubbleProps { direction: 'incoming' | 'outgoing'; time: string; children: React.ReactNode }

export function Bubble({ direction, time, children }: BubbleProps) {
  const isIn = direction === 'incoming'
  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '78%', alignSelf: isIn ? 'flex-start' : 'flex-end' }}>
      <div style={{
        padding: '7px 10px 5px', borderRadius: 8,
        borderTopLeftRadius: isIn ? 2 : 8, borderTopRightRadius: isIn ? 8 : 2,
        fontSize: 13.5, lineHeight: 1.4, boxShadow: '0 1px 1px rgba(0,0,0,0.12)',
        background: isIn ? 'white' : '#DCF8C6', color: '#111',
      }}>
        {children}
        <div style={{ fontSize: 10, color: isIn ? '#999' : '#6a9f6a', textAlign: 'right', marginTop: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 3 }}>
          {time}
          {!isIn && <span style={{ color: '#53BDEB', fontSize: 13 }}>✓✓</span>}
          {isIn && <span>✓✓</span>}
        </div>
      </div>
    </div>
  )
}
