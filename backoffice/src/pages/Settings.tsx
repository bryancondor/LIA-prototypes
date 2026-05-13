import { PageShell }   from '../components/layout/PageShell'
import { ComingSoon }  from '../components/ui/ComingSoon'

export function Settings() {
  return (
    <PageShell breadcrumb={{ label: 'Management', current: 'Settings' }}>
      <ComingSoon
        icon="⚙️"
        title="Settings — coming soon"
        description="Clinic configuration, notification schedules, medication catalogues, and team access management."
        eta="Planned · Q3 2026"
      />
    </PageShell>
  )
}
