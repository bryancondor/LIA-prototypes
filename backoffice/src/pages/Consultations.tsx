import { PageShell }  from '../components/layout/PageShell'
import { Badge }      from '../components/ui/Badge'
import { Avatar }     from '../components/ui/Avatar'
import { Button }     from '../components/ui/Button'
import { patients, consultations, type ConsultationStatus } from '../data/mock'

type BV = 'success' | 'warning' | 'danger' | 'neutral'
const statusCfg: Record<ConsultationStatus, { badge: BV; label: string }> = {
  pending:   { badge: 'warning', label: 'Pending' },
  sent:      { badge: 'success', label: 'Sent' },
  escalated: { badge: 'danger',  label: 'Escalated' },
}

export function Consultations() {
  return (
    <PageShell breadcrumb={{ label: 'Monitoring', current: 'Consultations' }} subtitle="SP3 — Patient Consultations">
      <div className="flex flex-col gap-3">
        {consultations.map(c => {
          const patient = patients.find(p => p.id === c.patientId)!
          const cfg = statusCfg[c.status]
          return (
            <div key={c.id} className="bg-surface border border-border rounded-[9px] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-[14px] pb-3 border-b border-border-strong">
                <div className="flex items-center gap-3">
                  <Avatar initials={patient.initials} />
                  <div>
                    <div className="text-[13px] font-semibold text-text-primary">{patient.name}</div>
                    <div className="text-[11.5px] text-text-muted mt-[2px]">{patient.diagnosis} · Received at {c.receivedAt}</div>
                  </div>
                </div>
                <Badge variant={cfg.badge}>{cfg.label}</Badge>
              </div>
              <div className="px-4 py-3 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[11px] font-semibold text-text-muted uppercase tracking-[0.5px] mb-2">Caregiver message</div>
                  <p className="text-[12.5px] text-text-secondary bg-surface-subtle rounded-[7px] p-3 border border-border">{c.message}</p>
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-text-muted uppercase tracking-[0.5px] mb-2">AI response</div>
                  <p className="text-[12.5px] text-text-secondary bg-surface-subtle rounded-[7px] p-3 border border-border">{c.aiResponse}</p>
                </div>
              </div>
              {c.status === 'pending' && (
                <div className="flex gap-2 px-4 pb-3">
                  <Button variant="primary">✓ Approve response</Button>
                  <Button variant="secondary">Edit response</Button>
                  <Button variant="secondary">Escalate to SP4</Button>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </PageShell>
  )
}
