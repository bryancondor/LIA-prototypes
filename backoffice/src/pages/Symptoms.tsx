import { PageShell } from '../components/layout/PageShell'
import { KpiCard }   from '../components/ui/KpiCard'
import { Badge }     from '../components/ui/Badge'
import { Avatar }    from '../components/ui/Avatar'
import { Button }    from '../components/ui/Button'
import { patients, symptomReports, type SymptomLevel } from '../data/mock'

type BV = 'success' | 'warning' | 'danger' | 'neutral'
const levelCfg: Record<SymptomLevel, { badge: BV; label: string; avatar: 'primary' | 'warning' | 'danger' }> = {
  ok:       { badge: 'success', label: 'OK',       avatar: 'primary' },
  warning:  { badge: 'warning', label: 'Warning',  avatar: 'warning' },
  critical: { badge: 'danger',  label: 'Critical', avatar: 'danger'  },
}
const rowBg: Record<SymptomLevel, string> = {
  ok:       'hover:bg-surface-muted',
  warning:  'bg-[#FFFDF0] hover:bg-[#FFF9E0]',
  critical: 'bg-[#FFF8F8] hover:bg-[#FFF0F0]',
}

export function Symptoms() {
  return (
    <PageShell breadcrumb={{ label: 'Monitoring', current: 'Symptoms' }} subtitle="SP2b — Symptom Questionnaire">
      <div className="grid grid-cols-4 gap-3">
        <KpiCard label="Avg score today" value="5.0" valueSuffix="/10" barPercent={50} barColor="#5E6AD2" sub="4 responses received" />
        <KpiCard label="OK" value={1} barPercent={25} barColor="#22C55E" sub={<span className="text-success font-semibold">Score ≥ 7</span>} />
        <KpiCard label="Warning" value={2} barPercent={50} barColor="#F59E0B" sub={<><span className="text-warning font-semibold">⚠</span> Score 4–6</>} />
        <KpiCard label="Critical" value={1} barPercent={25} barColor="#EF4444" sub={<><span className="text-danger font-semibold">● Requires</span> action</>} />
      </div>
      <div className="bg-surface border border-border rounded-[9px] overflow-hidden">
        <div className="flex items-center justify-between px-4 py-[14px] pb-3 border-b border-border-strong">
          <div>
            <div className="text-[13px] font-semibold text-text-primary">Today's symptom reports</div>
            <div className="text-[11.5px] text-text-muted mt-[3px]">May 12, 2026 · {symptomReports.length} responses</div>
          </div>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-surface-muted border-b border-border-subtle">
              {['Patient', 'Overall score', 'Key symptoms', 'Date', 'Status', ''].map(h => (
                <th key={h} className="px-4 py-[9px] text-left text-[10.5px] font-semibold text-text-muted uppercase tracking-[0.5px] whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {symptomReports.map(report => {
              const patient = patients.find(p => p.id === report.patientId)!
              const cfg = levelCfg[report.level]
              return (
                <tr key={report.patientId} className={`border-b border-[#F5F5F7] last:border-none cursor-pointer group transition-colors ${rowBg[report.level]}`}>
                  <td className="px-4 py-[11px]">
                    <div className="flex items-center gap-[10px]">
                      <Avatar initials={patient.initials} variant={cfg.avatar} />
                      <div>
                        <div className="text-[12.5px] font-semibold text-text-primary">{patient.name}</div>
                        <div className="text-[10.5px] text-text-muted mt-[1px]">{patient.diagnosis}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-[11px]">
                    <span className="text-[15px] font-bold text-text-primary">{report.overallScore}</span>
                    <span className="text-[11px] text-text-muted">/10</span>
                  </td>
                  <td className="px-4 py-[11px] text-[12px] text-text-muted">{report.responses.map(r => `${r.question} ${r.score}/10`).join(' · ')}</td>
                  <td className="px-4 py-[11px] text-[12.5px] text-text-muted">{report.date}</td>
                  <td className="px-4 py-[11px]"><Badge variant={cfg.badge}>{cfg.label}</Badge></td>
                  <td className="px-4 py-[11px]">
                    <div className="flex gap-[6px] opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="sm">View detail</Button>
                      <Button variant="secondary">Contact</Button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </PageShell>
  )
}
