interface TopbarProps {
  breadcrumb: { label: string; current: string }
  subtitle?: string
  primaryAction?: { label: string; onClick: () => void }
}

export function Topbar({ breadcrumb, subtitle, primaryAction }: TopbarProps) {
  return (
    <div className="bg-surface border-b border-border h-[52px] px-6 flex items-center gap-[14px] flex-shrink-0">
      <div className="text-[11.5px] text-text-muted flex items-center gap-[5px]">
        {breadcrumb.label} <span>›</span>
        <strong className="text-text-primary font-semibold">{breadcrumb.current}</strong>
      </div>
      {subtitle && <><div className="w-px h-4 bg-border" /><span className="text-[11.5px] text-text-muted">{subtitle}</span></>}
      <div className="ml-auto flex items-center gap-[8px] bg-surface-input border border-border rounded-[7px] px-[11px] py-[5px] w-[200px]">
        <span className="text-text-disabled text-[12px]">🔍</span>
        <input type="text" placeholder="Search patient…" className="border-none bg-transparent text-[12px] text-text-secondary outline-none w-full placeholder:text-text-muted" />
      </div>
      {primaryAction && (
        <button onClick={primaryAction.onClick} className="bg-primary text-white border-none rounded-md px-[13px] py-[7px] text-[12px] font-semibold cursor-pointer whitespace-nowrap hover:bg-primary-hover transition-colors">
          {primaryAction.label}
        </button>
      )}
    </div>
  )
}
