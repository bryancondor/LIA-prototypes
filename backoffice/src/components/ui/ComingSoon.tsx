interface ComingSoonProps {
  icon: string
  title: string
  description: string
  eta?: string
}

export function ComingSoon({ icon, title, description, eta }: ComingSoonProps) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 py-24 px-6 text-center select-none">
      <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center text-3xl mb-5 shadow-sm">
        {icon}
      </div>
      <div className="text-[17px] font-semibold text-text-primary tracking-tight mb-2">{title}</div>
      <p className="text-[13px] text-text-muted max-w-xs leading-relaxed mb-5">{description}</p>
      {eta && (
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary bg-primary-light border border-primary-border px-3 py-1.5 rounded-full uppercase tracking-[0.5px]">
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
          {eta}
        </span>
      )}
    </div>
  )
}
