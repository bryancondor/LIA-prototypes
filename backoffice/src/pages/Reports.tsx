import { PageShell }   from '../components/layout/PageShell'
import { ComingSoon }  from '../components/ui/ComingSoon'

export function Reports() {
  return (
    <PageShell breadcrumb={{ label: 'Management', current: 'Reports' }}>
      <ComingSoon
        icon="📊"
        title="Reports — coming soon"
        description="Exportable adherence summaries, symptom trend charts, and escalation logs for clinical audits."
        eta="Planned · Q3 2026"
      />
    </PageShell>
  )
}
