import { render, screen } from '@testing-library/react'
import { KpiCard } from './KpiCard'

describe('KpiCard', () => {
  it('renders label and value', () => {
    render(<KpiCard label="Adherence today" value={87} valueSuffix="%" barPercent={87} barColor="#22C55E" sub="vs yesterday" />)
    expect(screen.getByText('Adherence today')).toBeInTheDocument()
    expect(screen.getByText('87')).toBeInTheDocument()
  })

  it('renders sub text', () => {
    render(<KpiCard label="L" value="11" valueSuffix="/14" barPercent={78} barColor="#5E6AD2" sub="next reminder 08:00 PM" />)
    expect(screen.getByText('next reminder 08:00 PM')).toBeInTheDocument()
  })
})
