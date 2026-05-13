import { NavLink } from 'react-router-dom'

interface NavItem { icon: string; label: string; to: string; badge?: { count: number; variant: 'danger' | 'warning' } }

const monitoringNav: NavItem[] = [
  { icon: '💊', label: 'Adherence',     to: '/adherence' },
  { icon: '🌡️', label: 'Symptoms',      to: '/symptoms' },
  { icon: '⚠️', label: 'Escalations',   to: '/escalations', badge: { count: 1, variant: 'danger' } },
  { icon: '💬', label: 'Consultations', to: '/consultations', badge: { count: 3, variant: 'warning' } },
]
const managementNav: NavItem[] = [
  { icon: '👥', label: 'Patients',   to: '/patients' },
  { icon: '🏥', label: 'Onboarding', to: '/onboarding' },
  { icon: '📊', label: 'Reports',    to: '/reports' },
  { icon: '⚙️', label: 'Settings',  to: '/settings' },
]

export function Sidebar() {
  return (
    <div className="w-[228px] bg-surface border-r border-border flex flex-col flex-shrink-0 h-screen">
      <div className="px-4 py-[18px] pb-[14px] flex items-center gap-[9px] border-b border-border-subtle">
        <div className="w-[26px] h-[26px] bg-gradient-to-br from-primary to-[#7C85E0] rounded-[6px] flex items-center justify-center text-white font-bold text-[13px] shadow-[0_2px_6px_rgba(94,106,210,0.35)]">L</div>
        <span className="font-semibold text-[14px] text-text-primary tracking-tight">LIA</span>
        <span className="ml-auto text-[10px] text-text-disabled bg-surface-input px-[7px] py-[2px] rounded-full">Production</span>
      </div>
      <nav className="p-2 flex-1 flex flex-col gap-[1px] overflow-y-auto">
        <SectionLabel>Monitoring</SectionLabel>
        {monitoringNav.map(item => <SidebarNavItem key={item.to} {...item} />)}
        <SectionLabel className="mt-2">Management</SectionLabel>
        {managementNav.map(item => <SidebarNavItem key={item.to} {...item} />)}
      </nav>
      <div className="p-2 border-t border-border-subtle">
        <a href="/LIA-prototypes/" className="flex items-center gap-[9px] px-[10px] py-[7px] rounded-[6px] text-[12px] text-text-muted hover:bg-surface-subtle hover:text-text-secondary transition-colors no-underline">
          <span className="text-[14px] w-[18px] text-center">←</span>
          <span>Back to Home</span>
        </a>
      </div>
      <div className="p-2">
        <div className="p-[10px] border-t border-border-subtle flex items-center gap-[9px] cursor-pointer rounded-[6px] hover:bg-surface-muted transition-colors">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-[#7C85E0] flex items-center justify-center text-white text-[11px] font-semibold flex-shrink-0">DR</div>
          <div className="flex-1 min-w-0">
            <div className="text-[12px] font-semibold text-text-primary">Dr. Ramirez</div>
            <div className="text-[10px] text-text-muted">LIA Doctor</div>
          </div>
          <span className="text-text-disabled text-[12px]">⋯</span>
        </div>
      </div>
    </div>
  )
}

function SectionLabel({ children, className = '' }: { children: string; className?: string }) {
  return <div className={`px-2 pt-[6px] pb-1 text-[10px] font-semibold text-text-disabled uppercase tracking-[0.7px] ${className}`}>{children}</div>
}

function SidebarNavItem({ icon, label, to, badge }: NavItem) {
  return (
    <NavLink to={to} className={({ isActive }) =>
      `flex items-center gap-[9px] px-[10px] py-[7px] rounded-[6px] text-[12.5px] transition-colors ${
        isActive ? 'bg-primary-light text-primary font-semibold' : 'text-text-secondary hover:bg-surface-subtle hover:text-text-primary'
      }`
    }>
      <span className="text-[14px] w-[18px] text-center">{icon}</span>
      <span>{label}</span>
      {badge && (
        <span className={`ml-auto text-white text-[9px] font-bold px-[6px] py-[1px] rounded-full ${badge.variant === 'danger' ? 'bg-danger' : 'bg-warning'}`}>
          {badge.count}
        </span>
      )}
    </NavLink>
  )
}
