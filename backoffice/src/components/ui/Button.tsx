interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'sm'
}

const variants = {
  primary:   'bg-primary text-white border-transparent px-[13px] py-[7px] text-[12px] font-semibold hover:bg-primary-hover',
  secondary: 'bg-surface-input text-text-secondary border-border px-[9px] py-1 text-[11px] hover:bg-[#EBEBED]',
  sm:        'bg-primary-muted text-primary border-primary-border px-[9px] py-1 text-[11px] hover:bg-primary-light',
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <button className={`border rounded-md font-medium cursor-pointer whitespace-nowrap flex items-center gap-1 transition-colors ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
