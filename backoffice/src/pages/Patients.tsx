import { useNavigate } from 'react-router-dom'
import { PageShell }   from '../components/layout/PageShell'
import { Badge }       from '../components/ui/Badge'
import { Avatar }      from '../components/ui/Avatar'
import { Button }      from '../components/ui/Button'
import { patients, type OnboardingStatus } from '../data/mock'

type BV = 'success' | 'warning' | 'danger' | 'neutral'
const statusCfg: Record<OnboardingStatus, { badge: BV; label: string }> = {
  active:  { badge: 'success', label: 'Active' },
  pending: { badge: 'warning', label: 'Pending' },
  review:  { badge: 'neutral', label: 'In review' },
}

export function Patients() {
  const navigate = useNavigate()
  return (
    <PageShell breadcrumb={{ label: 'Management', current: 'Patients' }}
      primaryAction={{ label: '＋ New patient', onClick: () => navigate('/onboarding') }}>
      <div className="bg-surface border border-border rounded-[9px] overflow-hidden">
        <div className="flex items-center justify-between px-4 py-[14px] pb-3 border-b border-border-strong">
          <div>
            <div className="text-[13px] font-semibold text-text-primary">Active patients</div>
            <div className="text-[11.5px] text-text-muted mt-[3px]">{patients.length} patients registered</div>
          </div>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-surface-muted border-b border-border-subtle">
              {['Patient', 'Diagnosis', 'Caregiver', 'Medications', 'Status', ''].map(h => (
                <th key={h} className="px-4 py-[9px] text-left text-[10.5px] font-semibold text-text-muted uppercase tracking-[0.5px] whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {patients.map(p => {
              const cfg = statusCfg[p.onboardingStatus]
              return (
                <tr key={p.id} className="border-b border-[#F5F5F7] last:border-none cursor-pointer group hover:bg-surface-muted transition-colors">
                  <td className="px-4 py-[11px]">
                    <div className="flex items-center gap-[10px]">
                      <Avatar initials={p.initials} />
                      <div className="text-[12.5px] font-semibold text-text-primary">{p.name}</div>
                    </div>
                  </td>
                  <td className="px-4 py-[11px] text-[12.5px] text-text-secondary">{p.diagnosis}</td>
                  <td className="px-4 py-[11px] text-[12.5px] text-text-secondary">{p.caregiver}</td>
                  <td className="px-4 py-[11px] text-[12.5px] text-text-muted">{p.medications.length} scheduled</td>
                  <td className="px-4 py-[11px]"><Badge variant={cfg.badge}>{cfg.label}</Badge></td>
                  <td className="px-4 py-[11px]">
                    <div className="flex gap-[6px] opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="sm">View profile</Button>
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
