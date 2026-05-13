import { useState } from 'react'
import { PageShell } from '../components/layout/PageShell'
import { Button }    from '../components/ui/Button'

const steps = ['Personal data', 'Disease & condition', 'Medications', 'Reminder schedule', 'Review & activate']

export function Onboarding() {
  const [step, setStep] = useState(0)
  return (
    <PageShell breadcrumb={{ label: 'Management', current: 'Onboarding' }} subtitle="New patient">
      <div className="flex items-center gap-2">
        {steps.map((label, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`flex items-center gap-2 px-3 py-[6px] rounded-full text-[11.5px] font-medium transition-colors ${
              i === step ? 'bg-primary text-white' : i < step ? 'bg-success-bg text-success-fg' : 'bg-surface-input text-text-muted'
            }`}>
              <span>{i < step ? '✓' : i + 1}</span>
              <span>{label}</span>
            </div>
            {i < steps.length - 1 && <div className="w-6 h-px bg-border" />}
          </div>
        ))}
      </div>
      <div className="bg-surface border border-border rounded-[9px] p-6">
        {step === 0 && (
          <div className="flex flex-col gap-4 max-w-lg">
            <div className="text-[14px] font-semibold text-text-primary mb-2">Personal data</div>
            {[['Full name', 'e.g. Carlos Mendoza'], ['Date of birth', 'YYYY-MM-DD'], ['Caregiver name', 'e.g. Mariana Mendoza'], ['Caregiver phone (WhatsApp)', '+51 9XX XXX XXX']].map(([label, ph]) => (
              <div key={label}>
                <label className="block text-[11.5px] font-semibold text-text-muted mb-1">{label}</label>
                <input placeholder={ph} className="w-full border border-border rounded-[7px] px-3 py-2 text-[12.5px] text-text-primary bg-surface-subtle focus:outline-none focus:border-primary" />
              </div>
            ))}
          </div>
        )}
        {step === 1 && (
          <div className="flex flex-col gap-4 max-w-lg">
            <div className="text-[14px] font-semibold text-text-primary mb-2">Disease & condition</div>
            {[['Primary diagnosis', 'e.g. Type 2 Diabetes'], ['Current treatment stage', 'e.g. Post-op, Active chemo']].map(([label, ph]) => (
              <div key={label}>
                <label className="block text-[11.5px] font-semibold text-text-muted mb-1">{label}</label>
                <input placeholder={ph} className="w-full border border-border rounded-[7px] px-3 py-2 text-[12.5px] text-text-primary bg-surface-subtle focus:outline-none focus:border-primary" />
              </div>
            ))}
          </div>
        )}
        {step >= 2 && <div className="text-[12.5px] text-text-muted">{steps[step]} — form content here</div>}
      </div>
      <div className="flex gap-2">
        {step > 0 && <Button variant="secondary" onClick={() => setStep(s => s - 1)}>← Back</Button>}
        {step < steps.length - 1
          ? <Button variant="primary" onClick={() => setStep(s => s + 1)}>Next →</Button>
          : <Button variant="primary">Activate patient</Button>}
      </div>
    </PageShell>
  )
}
