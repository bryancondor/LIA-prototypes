interface KpiCardProps {
  label: string; value: string | number; valueSuffix?: string
  barPercent: number; barColor: string; sub: React.ReactNode
}

export function KpiCard({ label, value, valueSuffix, barPercent, barColor, sub }: KpiCardProps) {
  return (
    <div className="bg-surface border border-border rounded-[9px] p-[14px_16px] flex flex-col gap-[6px] hover:shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-shadow">
      <div className="text-[11px] font-semibold text-text-muted uppercase tracking-[0.4px]">{label}</div>
      <div className="text-[26px] font-bold text-text-primary tracking-[-1px] leading-none">
        {value}
        {valueSuffix && <span className="text-[14px] font-normal text-text-disabled">{valueSuffix}</span>}
      </div>
      <div className="h-[3px] bg-border rounded-full overflow-hidden mt-1">
        <div className="h-full rounded-full" style={{ width: `${barPercent}%`, background: barColor }} />
      </div>
      <div className="text-[11px] text-text-muted flex items-center gap-1">{sub}</div>
    </div>
  )
}
