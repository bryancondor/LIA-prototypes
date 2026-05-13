type BadgeVariant = 'success' | 'warning' | 'danger' | 'neutral'

interface BadgeProps { variant: BadgeVariant; children: React.ReactNode }

const styles: Record<BadgeVariant, { wrap: string; dot: string }> = {
  success: { wrap: 'bg-success-bg text-success-fg', dot: 'bg-success' },
  warning: { wrap: 'bg-warning-bg text-warning-fg', dot: 'bg-warning' },
  danger:  { wrap: 'bg-danger-bg text-danger-fg',   dot: 'bg-danger' },
  neutral: { wrap: 'bg-surface-input text-text-secondary', dot: '' },
}

export function Badge({ variant, children }: BadgeProps) {
  const { wrap, dot } = styles[variant]
  return (
    <span className={`inline-flex items-center gap-1 px-[9px] py-[3px] rounded-full text-[11px] font-semibold whitespace-nowrap ${wrap}`}>
      {variant !== 'neutral' && <span className={`w-[7px] h-[7px] rounded-full flex-shrink-0 ${dot}`} />}
      {children}
    </span>
  )
}
