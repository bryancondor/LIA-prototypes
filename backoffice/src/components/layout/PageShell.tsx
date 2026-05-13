import { Sidebar } from './Sidebar'
import { Topbar }  from './Topbar'

interface PageShellProps {
  breadcrumb: { label: string; current: string }
  subtitle?: string
  primaryAction?: { label: string; onClick: () => void }
  children: React.ReactNode
}

export function PageShell({ breadcrumb, subtitle, primaryAction, children }: PageShellProps) {
  return (
    <div className="flex h-screen overflow-hidden font-sans bg-surface-subtle">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar breadcrumb={breadcrumb} subtitle={subtitle} primaryAction={primaryAction} />
        <main className="flex-1 overflow-y-auto p-5 px-6 flex flex-col gap-4">{children}</main>
      </div>
    </div>
  )
}
