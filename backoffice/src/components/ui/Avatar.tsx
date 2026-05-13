type AvatarVariant = 'primary' | 'warning' | 'danger'
interface AvatarProps { initials: string; variant?: AvatarVariant; size?: 'sm' | 'md' }

const variantStyles: Record<AvatarVariant, string> = {
  primary: 'bg-[#EDEDFF] text-primary',
  warning: 'bg-warning-bg text-warning-fg',
  danger:  'bg-danger-bg text-danger-fg',
}
const sizeStyles = { sm: 'w-7 h-7', md: 'w-[30px] h-[30px]' }

export function Avatar({ initials, variant = 'primary', size = 'md' }: AvatarProps) {
  return (
    <div className={`rounded-full flex items-center justify-center text-[11px] font-semibold flex-shrink-0 ${variantStyles[variant]} ${sizeStyles[size]}`}>
      {initials}
    </div>
  )
}
