import { PhoneFrame } from '../components/PhoneFrame'
import { Bubble }     from '../components/Bubble'

const outer: React.CSSProperties = { flex: 1, overflowX: 'auto', overflowY: 'auto' }
const inner: React.CSSProperties = { display: 'flex', alignItems: 'flex-start', gap: 40, padding: 32, fontFamily: '-apple-system,sans-serif' }

function PdfBubble({ filename, subtitle, time }: { filename: string; subtitle: string; time: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '78%', alignSelf: 'flex-start' }}>
      <div style={{
        background: 'white', borderRadius: 8, borderTopLeftRadius: 2,
        boxShadow: '0 1px 1px rgba(0,0,0,0.12)', overflow: 'hidden',
        minWidth: 240,
      }}>
        {/* Document row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px 6px' }}>
          {/* PDF icon */}
          <div style={{
            width: 40, height: 48, borderRadius: 4, background: '#E53935',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', flexShrink: 0, position: 'relative',
            boxShadow: '0 1px 3px rgba(0,0,0,0.25)',
          }}>
            {/* Folded corner */}
            <div style={{
              position: 'absolute', top: 0, right: 0,
              width: 10, height: 10,
              background: 'rgba(255,255,255,0.3)',
              clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
            }} />
            <div style={{
              width: 26, height: 2, background: 'rgba(255,255,255,0.6)',
              borderRadius: 1, marginBottom: 2,
            }} />
            <div style={{
              width: 26, height: 2, background: 'rgba(255,255,255,0.6)',
              borderRadius: 1, marginBottom: 2,
            }} />
            <div style={{
              width: 18, height: 2, background: 'rgba(255,255,255,0.6)',
              borderRadius: 1,
            }} />
            <span style={{ color: 'white', fontSize: 9, fontWeight: 700, marginTop: 4, letterSpacing: 0.5 }}>PDF</span>
          </div>

          {/* File info */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontSize: 13, fontWeight: 600, color: '#111',
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
              lineHeight: 1.3,
            }}>{filename}</div>
            <div style={{ fontSize: 11, color: '#888', marginTop: 2 }}>{subtitle}</div>
          </div>

          {/* Download icon */}
          <div style={{
            width: 28, height: 28, borderRadius: '50%',
            background: '#F0F0F0',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, fontSize: 13,
          }}>⬇</div>
        </div>

        {/* Divider + timestamp */}
        <div style={{
          borderTop: '1px solid #F0F0F0',
          padding: '4px 12px 6px',
          display: 'flex', justifyContent: 'flex-end', alignItems: 'center',
        }}>
          <span style={{ fontSize: 10, color: '#999' }}>{time} ✓✓</span>
        </div>
      </div>
    </div>
  )
}

export function SP4Flow() {
  return (
    <div style={outer}><div style={inner}>
      <PhoneFrame label="Escalation notification sent">
        <Bubble direction="incoming" time="10:47">
          Hi Carmen 🌹<br /><br />I wanted to flag something important. Rose's check-in today suggests she may be experiencing significant pain — her overall score was 3 out of 10.<br /><br />We recommend contacting her care team as soon as possible. I'm here if you need anything.
        </Bubble>
        <div style={{ marginTop: 4 }} />
        <Bubble direction="incoming" time="10:48">
          I've also prepared a 7-day clinical summary for Rose — symptoms, medications, and check-ins. Share it with her doctor at the next visit. 📋
        </Bubble>
        <div style={{ marginTop: 4 }} />
        <PdfBubble
          filename="Clinical Summary — Rose Paredes"
          subtitle="PDF · 4 pages · 184 KB"
          time="10:48"
        />
      </PhoneFrame>
    </div></div>
  )
}
