import { PhoneFrame }   from '../components/PhoneFrame'
import { Bubble }       from '../components/Bubble'
import { QuickReplies } from '../components/QuickReplies'

const outer: React.CSSProperties = { flex: 1, overflowX: 'auto', overflowY: 'auto' }
const inner: React.CSSProperties = { display: 'flex', alignItems: 'flex-start', gap: 40, padding: 32, fontFamily: '-apple-system,sans-serif' }

export function SP2aFlow() {
  return (
    <div style={outer}><div style={inner}>
      <PhoneFrame label="1 — Reminder sent">
        <Bubble direction="incoming" time="8:00">Hi Mariana 😊 I'm LIA — I'll be by your side as you take care of your dad. Anything about his treatment, just ask.</Bubble>
        <div style={{ marginTop: 6 }} />
        <Bubble direction="incoming" time="10:00">
          Mariana, it's time for your dad's <strong>Metformin 500mg</strong> 💊<br /><br />Did he take it?
        </Bubble>
        <QuickReplies options={[{ label: '✅ Yes, he took it' }, { label: "❌ No, he didn't" }]} />
      </PhoneFrame>

      <PhoneFrame label="2 — Confirmed ✅">
        <Bubble direction="incoming" time="8:00">Hi Mariana 😊 I'm LIA — I'll be by your side as you take care of your dad. Anything about his treatment, just ask.</Bubble>
        <div style={{ marginTop: 6 }} />
        <Bubble direction="incoming" time="10:00">
          Mariana, it's time for your dad's <strong>Metformin 500mg</strong> 💊<br /><br />Did he take it?
        </Bubble>
        <QuickReplies options={[{ label: '✅ Yes, he took it', selected: true }, { label: "❌ No, he didn't", disabled: true }]} />
        <div style={{ marginTop: 4 }} />
        <Bubble direction="outgoing" time="10:02">✅ Yes, he took it</Bubble>
        <Bubble direction="incoming" time="10:02">
          Great, thanks Mariana ✅ All noted.<br /><br />I'll remind you tonight at <strong>8:00 PM</strong> for the next dose.
        </Bubble>
      </PhoneFrame>

      <PhoneFrame label="3 — Not taken ❌">
        <Bubble direction="incoming" time="10:00">
          Mariana, it's time for your dad's <strong>Metformin 500mg</strong> 💊<br /><br />Did he take it?
        </Bubble>
        <QuickReplies options={[{ label: '✅ Yes, he took it', disabled: true }, { label: "❌ No, he didn't", selected: true }]} />
        <div style={{ marginTop: 4 }} />
        <Bubble direction="outgoing" time="10:05">❌ No, he didn't</Bubble>
        <Bubble direction="incoming" time="10:05">
          Thanks for letting me know. I've noted that the dose was missed. 📋<br /><br />If there's a reason he couldn't take it, feel free to tell me — I'm here.
        </Bubble>
      </PhoneFrame>
    </div></div>
  )
}
