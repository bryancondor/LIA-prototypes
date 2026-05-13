import { useState } from 'react'
import { PageShell } from '../components/layout/PageShell'
import { Badge }     from '../components/ui/Badge'
import { Avatar }    from '../components/ui/Avatar'
import { Button }    from '../components/ui/Button'
import { patients, escalations, type EscalationStatus } from '../data/mock'

type BV = 'success' | 'warning' | 'danger' | 'neutral'
const statusCfg: Record<EscalationStatus, { badge: BV; label: string }> = {
  pending:    { badge: 'danger',  label: 'Pending review' },
  approved:   { badge: 'success', label: 'Approved' },
  overridden: { badge: 'neutral', label: 'Overridden' },
}

export function Escalations() {
  const [drafts, setDrafts]     = useState<Record<string, string>>(Object.fromEntries(escalations.map(e => [e.id, e.aiDraft])))
  const [statuses, setStatuses] = useState<Record<string, EscalationStatus>>(Object.fromEntries(escalations.map(e => [e.id, e.status])))

  return (
    <PageShell breadcrumb={{ label: 'Monitoring', current: 'Escalations' }} subtitle="SP4 — Critical Escalation">
      <div className="flex flex-col gap-3">
        {escalations.map(esc => {
          const patient = patients.find(p => p.id === esc.patientId)!
          const cfg = statusCfg[statuses[esc.id]]
          return (
            <div key={esc.id} className="bg-surface border border-danger rounded-[9px] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-[14px] pb-3 border-b border-border-strong">
                <div className="flex items-center gap-3">
                  <Avatar initials={patient.initials} variant="danger" />
                  <div>
                    <div className="text-[13px] font-semibold text-text-primary">{patient.name}</div>
                    <div className="text-[11.5px] text-text-muted mt-[2px]">{patient.diagnosis} · Triggered at {esc.triggeredAt}</div>
                  </div>
                </div>
                <Badge variant={cfg.badge}>{cfg.label}</Badge>
              </div>
              <div className="px-4 py-3">
                <div className="text-[11px] font-semibold text-text-muted uppercase tracking-[0.5px] mb-2">Trigger reason</div>
                <p className="text-[12.5px] text-text-secondary mb-4">{esc.reason}</p>
                <div className="text-[11px] font-semibold text-text-muted uppercase tracking-[0.5px] mb-2">AI draft message</div>
                <textarea value={drafts[esc.id]} onChange={e => setDrafts(d => ({ ...d, [esc.id]: e.target.value }))}
                  className="w-full border border-border rounded-[7px] p-3 text-[12.5px] text-text-secondary bg-surface-subtle resize-none focus:outline-none focus:border-primary" rows={4} />
                {statuses[esc.id] === 'pending' && (
                  <div className="flex gap-2 mt-3">
                    <Button variant="primary" onClick={() => setStatuses(s => ({ ...s, [esc.id]: 'approved' }))}>✓ Approve and send</Button>
                    <Button variant="secondary" onClick={() => setStatuses(s => ({ ...s, [esc.id]: 'overridden' }))}>Edit and override</Button>
                  </div>
                )}
                {statuses[esc.id] !== 'pending' && (
                  <p className="text-[11.5px] text-success-fg mt-3 font-semibold">✓ Message sent to caregiver.</p>
                )}
              </div>
            </div>
          )
        })}
        {escalations.length === 0 && <div className="text-center py-16 text-text-muted text-[13px]">No active escalations</div>}
      </div>
    </PageShell>
  )
}
