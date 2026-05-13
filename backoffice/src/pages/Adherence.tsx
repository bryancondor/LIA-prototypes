import { useState } from 'react'
import { PageShell } from '../components/layout/PageShell'
import { KpiCard }   from '../components/ui/KpiCard'
import { Badge }     from '../components/ui/Badge'
import { Avatar }    from '../components/ui/Avatar'
import { Tabs }      from '../components/ui/Tabs'
import { Button }    from '../components/ui/Button'
import { patients, type Patient, type Medication, type MedicationStatus } from '../data/mock'

type BV = 'success' | 'warning' | 'danger' | 'neutral'
type AV = 'primary' | 'warning' | 'danger'

const statusCfg: Record<MedicationStatus, { badge: BV; label: string; avatar: AV }> = {
  'taken':       { badge: 'success', label: 'Taken',       avatar: 'primary' },
  'no-response': { badge: 'warning', label: 'No response', avatar: 'warning' },
  'not-taken':   { badge: 'danger',  label: 'Not taken',   avatar: 'danger'  },
  'scheduled':   { badge: 'neutral', label: 'Scheduled',   avatar: 'primary' },
}
const rowBg: Record<MedicationStatus, string> = {
  'taken':       'hover:bg-surface-muted',
  'no-response': 'bg-[#FFFDF0] hover:bg-[#FFF9E0]',
  'not-taken':   'bg-[#FFF8F8] hover:bg-[#FFF0F0]',
  'scheduled':   'hover:bg-surface-muted',
}

const filterTabs = [
  { label: 'All', count: 14 }, { label: '✓ Taken', count: 11 },
  { label: '⚠ No resp.', count: 2 }, { label: '✗ Not taken', count: 1 },
]
const filterKeys: (MedicationStatus | 'all')[] = ['all', 'taken', 'no-response', 'not-taken']

export function Adherence() {
  const [activeTab, setActiveTab] = useState(0)
  const allRows = patients.flatMap(p => p.medications.map(m => ({ p, m })))
  const filtered = filterKeys[activeTab] === 'all' ? allRows : allRows.filter(r => r.m.status === filterKeys[activeTab])

  return (
    <PageShell breadcrumb={{ label: 'Monitoring', current: 'Adherence' }} subtitle="SP2a — Medication Reminder"
      primaryAction={{ label: '＋ Add reminder', onClick: () => {} }}>
      <div className="grid grid-cols-4 gap-3">
        <KpiCard label="Adherence today" value={87} valueSuffix="%" barPercent={87} barColor="#22C55E"
          sub={<><span className="text-success font-semibold">↑ +3%</span> vs yesterday</>} />
        <KpiCard label="Confirmed" value="11" valueSuffix="/14" barPercent={78} barColor="#5E6AD2"
          sub={<>next reminder <strong className="text-text-primary">08:00 PM</strong></>} />
        <KpiCard label="No response" value={2} barPercent={14} barColor="#F59E0B"
          sub={<><span className="text-warning font-semibold">⚠</span> Mild alert — review</>} />
        <KpiCard label="Not taken" value={1} barPercent={7} barColor="#EF4444"
          sub={<><span className="text-danger font-semibold">●</span> Requires action today</>} />
      </div>

      <div className="bg-surface border border-border rounded-[9px] overflow-hidden">
        <div className="flex items-center justify-between px-4 py-[14px] pb-3 border-b border-border-strong">
          <div>
            <div className="text-[13px] font-semibold text-text-primary">Today's reminders</div>
            <div className="text-[11.5px] text-text-muted mt-[3px]">May 12, 2026 · 14 active patients</div>
          </div>
          <Tabs tabs={filterTabs} activeIndex={activeTab} onChange={setActiveTab} />
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-surface-muted border-b border-border-subtle">
              {['Patient', 'Medication', 'Dose', 'Sent at', 'Response', 'Status', ''].map(h => (
                <th key={h} className="px-4 py-[9px] text-left text-[10.5px] font-semibold text-text-muted uppercase tracking-[0.5px] whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map(({ p, m }: { p: Patient; m: Medication }) => (
              <tr key={`${p.id}-${m.name}`} className={`border-b border-[#F5F5F7] last:border-none cursor-pointer group transition-colors ${rowBg[m.status]}`}>
                <td className="px-4 py-[11px]">
                  <div className="flex items-center gap-[10px]">
                    <Avatar initials={p.initials} variant={statusCfg[m.status].avatar} />
                    <div>
                      <div className={`text-[12.5px] font-semibold ${m.status === 'not-taken' ? 'text-danger-fg' : 'text-text-primary'}`}>{p.name}</div>
                      <div className="text-[10.5px] text-text-muted mt-[1px]">{p.diagnosis}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-[11px] text-[12.5px] text-text-secondary">{m.name}</td>
                <td className="px-4 py-[11px] text-[12.5px] text-text-secondary">{m.dose} {m.unit}</td>
                <td className="px-4 py-[11px] text-[12.5px] text-text-muted">{m.scheduledAt}</td>
                <td className="px-4 py-[11px] text-[12.5px] text-text-muted">
                  {m.respondedAt
                    ? <>{m.respondedAt} · <strong className={m.response === 'YES' ? 'text-success-fg' : 'text-danger-fg'}>{m.response}</strong></>
                    : `— ${m.status === 'scheduled' ? 'Scheduled' : 'No response'}`}
                </td>
                <td className="px-4 py-[11px]"><Badge variant={statusCfg[m.status].badge}>{statusCfg[m.status].label}</Badge></td>
                <td className="px-4 py-[11px]">
                  <div className="flex gap-[6px] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="sm">View history</Button>
                    <Button variant="secondary">Contact</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  )
}
