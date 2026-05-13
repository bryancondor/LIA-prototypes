import { PhoneFrame }   from '../components/PhoneFrame'
import { Bubble }       from '../components/Bubble'
import { QuickReplies } from '../components/QuickReplies'

const outer: React.CSSProperties = { flex: 1, overflowX: 'auto', overflowY: 'auto' }
const inner: React.CSSProperties = { display: 'flex', alignItems: 'flex-start', gap: 40, padding: 32, fontFamily: '-apple-system,sans-serif' }

export function SP2bFlow() {
  return (
    <div style={outer}><div style={inner}>
      <PhoneFrame label="1 — Questionnaire sent">
        <Bubble direction="incoming" time="09:00">
          Good morning Mariana 🌅 Time for your dad's daily check-in.<br /><br /><strong>How is he feeling overall today?</strong>
        </Bubble>
        <QuickReplies options={[{ label: '😊 Great (8-10)' }, { label: '😐 Ok (5-7)' }, { label: '😔 Not well (1-4)' }]} />
      </PhoneFrame>

      <PhoneFrame label="2 — Follow-up question">
        <Bubble direction="incoming" time="09:00"><strong>How is he feeling overall today?</strong></Bubble>
        <QuickReplies options={[{ label: '😐 Ok (5-7)', selected: true }, { label: '😊 Great (8-10)', disabled: true }, { label: '😔 Not well (1-4)', disabled: true }]} />
        <div style={{ marginTop: 4 }} />
        <Bubble direction="outgoing" time="09:02">😐 Ok (5-7)</Bubble>
        <Bubble direction="incoming" time="09:02">
          Got it, thank you 🙏<br /><br /><strong>Any nausea or vomiting today?</strong>
        </Bubble>
        <QuickReplies options={[{ label: '✅ No, none' }, { label: '⚠️ A little' }, { label: '🔴 Yes, significant' }]} />
      </PhoneFrame>

      <PhoneFrame label="3 — All clear">
        <Bubble direction="incoming" time="09:00"><strong>How is he feeling overall today?</strong></Bubble>
        <Bubble direction="outgoing" time="09:02">😐 Ok (5-7)</Bubble>
        <Bubble direction="incoming" time="09:02"><strong>Any nausea or vomiting today?</strong></Bubble>
        <Bubble direction="outgoing" time="09:04">✅ No, none</Bubble>
        <Bubble direction="incoming" time="09:04">
          Thanks Mariana ✅ Everything looks stable today. I'll check in again tomorrow morning.<br /><br />If anything changes, just message me here.
        </Bubble>
      </PhoneFrame>
    </div></div>
  )
}
