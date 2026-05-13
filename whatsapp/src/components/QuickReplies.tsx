interface QuickReplyOption { label: string; selected?: boolean; disabled?: boolean }
interface QuickRepliesProps { options: QuickReplyOption[]; onSelect?: (i: number) => void }

export function QuickReplies({ options, onSelect }: QuickRepliesProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 2, width: '78%', alignSelf: 'flex-start' }}>
      {options.map((opt, i) => (
        <button key={i} onClick={() => onSelect?.(i)} style={{
          background: opt.selected ? '#e8f4fd' : 'white',
          border: opt.selected ? '1.5px solid #0A96ED' : 'none',
          borderRadius: 8, padding: '9px 14px', fontSize: 13.5, color: '#0A96ED',
          fontWeight: 500, textAlign: 'center', cursor: 'pointer',
          boxShadow: '0 1px 1px rgba(0,0,0,0.1)', opacity: opt.disabled ? 0.45 : 1,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        }}>{opt.label}</button>
      ))}
    </div>
  )
}
