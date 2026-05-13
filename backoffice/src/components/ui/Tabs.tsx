interface Tab { label: string; count?: number }
interface TabsProps { tabs: Tab[]; activeIndex: number; onChange: (i: number) => void }

export function Tabs({ tabs, activeIndex, onChange }: TabsProps) {
  return (
    <div className="flex gap-[2px] bg-surface-input rounded-[7px] p-[3px] w-fit">
      {tabs.map((tab, i) => (
        <button key={i} onClick={() => onChange(i)}
          className={`px-3 py-[5px] rounded-[5px] text-[11.5px] whitespace-nowrap transition-all ${
            i === activeIndex
              ? 'bg-surface text-text-primary font-semibold shadow-[0_1px_4px_rgba(0,0,0,0.08)]'
              : 'font-medium text-text-secondary hover:text-text-primary'
          }`}>
          {tab.label}
          {tab.count !== undefined && <span className="ml-1 text-text-muted font-normal">{tab.count}</span>}
        </button>
      ))}
    </div>
  )
}
