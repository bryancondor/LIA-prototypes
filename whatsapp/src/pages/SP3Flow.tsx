import { PhoneFrame } from '../components/PhoneFrame'
import { Bubble }     from '../components/Bubble'

const outer: React.CSSProperties = { flex: 1, overflowX: 'auto', overflowY: 'auto' }
const inner: React.CSSProperties = { display: 'flex', alignItems: 'flex-start', gap: 40, padding: 32, fontFamily: '-apple-system,sans-serif' }

export function SP3Flow() {
  return (
    <div style={outer}><div style={inner}>
      <PhoneFrame label="1 — Caregiver asks">
        <Bubble direction="outgoing" time="14:22">Mary has been feeling very nauseous after the morning dose. Should we change the timing?</Bubble>
        <Bubble direction="incoming" time="14:23">
          Thank you for letting me know 🙏<br /><br />Nausea after Ondansetron can happen. Taking it with a small amount of food may help.<br /><br />I'm flagging this for Dr. Ramirez to review — she'll be in touch if a change is needed.
        </Bubble>
      </PhoneFrame>

      <PhoneFrame label="2 — Critical question">
        <Bubble direction="outgoing" time="07:30">Jorge said the pain is getting worse at night. Is this normal during chemo?</Bubble>
        <Bubble direction="incoming" time="07:31">
          I understand — that sounds difficult 💙<br /><br />Increased nighttime pain can happen during chemo cycles. I noticed Jorge also didn't take his Tramadol this morning, which may be a factor.<br /><br />Please make sure he takes the next dose as scheduled. I've alerted Dr. Ramirez.
        </Bubble>
      </PhoneFrame>
    </div></div>
  )
}
